import { Configuration } from "webpack";

import {BuildOptions} from "./types/types";

import { buildHtmlWebpackPlugin } from "./Plugins/buildHtmlWebpackPlugin";
import { buildDefinePlugin } from "./Plugins/buildDefinePlugin";
import { buildProgressPlugin } from "./Plugins/buildProgressPlugin";
import { buildReactRefreshWebpackPlugin } from "./Plugins/buildReactRefreshWebpackPlugin";
import { buildMiniCssExtractPlugin } from "./Plugins/buildMiniCssExtractPlugin";
import { buildCopyPlugin } from "./Plugins/buildCopyPlugin";
import { buildESLintWebpackPlugin } from "./Plugins/buildESLintWebpackPlugin";


export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
    const plugins: Configuration["plugins"] = [];

    buildHtmlWebpackPlugin(plugins, options);
    buildDefinePlugin(plugins, options);
    buildProgressPlugin(plugins, options);
    buildReactRefreshWebpackPlugin(plugins, options);
    buildMiniCssExtractPlugin(plugins, options);
    buildCopyPlugin(plugins, options);
    buildESLintWebpackPlugin(plugins, options);

    return plugins;
}