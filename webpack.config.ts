import path from 'path';
import webpack from 'webpack';

import { BuildMode, BuildPaths, buildWebpack } from '@packages/build';

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, "dist"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "src", "index.html"),
        public: path.resolve(__dirname, "public"),
        src: path.resolve(__dirname, "src"),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths
    })

    return config;
}