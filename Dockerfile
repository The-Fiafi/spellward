FROM node:23.5.0-alpine3.21 AS builder

WORKDIR /app
COPY . ./
RUN ["ls"]
RUN npm ci && npm run build:production

FROM nginx:stable-alpine3.20-slim

RUN rm -rf /etc/nginx/conf.d/*
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
