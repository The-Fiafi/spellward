import {ModuleOptions} from "webpack";
import {BuildOptions} from "./types/types";

import { assetLoader } from "./Loaders/assetLoader";
import { scssLoader } from "./Loaders/scssLoader";
import { tsLoader } from "./Loaders/tsLoader";
import { svgrLoader } from "./Loaders/svgrLoader";


export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
    const isDev = options.mode === "development";

    return [
        assetLoader(isDev),
        scssLoader(isDev),
        tsLoader(isDev),
        svgrLoader(isDev)
    ];
}