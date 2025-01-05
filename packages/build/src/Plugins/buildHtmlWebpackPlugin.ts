import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { BuildOptions } from "../types/types";


export const buildHtmlWebpackPlugin = (plugins: Configuration["plugins"], {paths}: BuildOptions) => {
    plugins.push(
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, "favicon.ico")
        })
    );
}