import path from "path";
import { Configuration } from "webpack";
import CopyPlugin from "copy-webpack-plugin";

import { BuildOptions } from "../types/types";


export const buildCopyPlugin = (plugins: Configuration["plugins"], {paths, mode}: BuildOptions) => {
    if (mode != "production") return;
    
   plugins.push(
        new CopyPlugin({
            patterns: [{
                from: paths.public,
                to: paths.output
            },
            {
                from: path.resolve(paths.src, "static"),
                to: path.resolve(paths.output, "static")
            }]
        })
    )
}