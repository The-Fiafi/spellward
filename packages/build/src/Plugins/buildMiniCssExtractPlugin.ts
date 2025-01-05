import { Configuration } from "webpack";

import { BuildOptions } from "../types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export const buildMiniCssExtractPlugin = (plugins: Configuration["plugins"], {mode}: BuildOptions) => {
    if (mode != "production") return;
    
    plugins.push(new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
    }))
}