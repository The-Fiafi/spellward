import { Configuration } from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import { BuildOptions } from "../types/types";


export const buildReactRefreshWebpackPlugin = (plugins: Configuration["plugins"], {mode}: BuildOptions) => {
    if (mode != "development") return;
    
    plugins.push(
        new ReactRefreshWebpackPlugin()
    );
}