import ReactRefreshTypeScript from "react-refresh-typescript";


export const tsLoader = (isDev: boolean) => {
    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: "ts-loader",
            options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
            }
        }]
    }
}