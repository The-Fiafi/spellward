declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.mp4';
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __BUILD_MODE__: 'production' | 'development';