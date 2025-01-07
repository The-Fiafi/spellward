import webpack from "webpack";

import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";
import { buildLoaders } from "./buildLoaders";


export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    const isDev = mode === "development";

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: isDev ? "[name].[contenthash].js" : "main.js",
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        performance: { // Fucking shit
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
}