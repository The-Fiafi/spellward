import { Configuration, ProgressPlugin } from "webpack";

import { BuildOptions } from "../types/types";


export const buildProgressPlugin = (plugins: Configuration["plugins"], {mode}: BuildOptions) => {
    if (mode != "development") return;
    
    plugins.push(
        new ProgressPlugin()
    );
}