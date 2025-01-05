import { Configuration } from "webpack";
import ESLintWebpackPlugin from "eslint-webpack-plugin";

import { BuildOptions } from "../types/types";


export const buildESLintWebpackPlugin = (plugins: Configuration["plugins"], {mode}: BuildOptions) => {
    if (mode != "development") return;
    
    plugins.push(
        new ESLintWebpackPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
            configType: "flat"
        })
    );
}