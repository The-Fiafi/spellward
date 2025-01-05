import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "../types/types";


export const buildDefinePlugin = (plugins: Configuration['plugins'], {mode}: BuildOptions) => {
    plugins.push(
        new DefinePlugin({
            __BUILD_MODE__: JSON.stringify(mode),
        })
    );
}