import { useContext } from "react";

import PlatformContext, { PlatformGlobalContent } from "@/context/PlatformContext/PlatformContext";

import Stars from "@/static/img/stars.png";

import "./TitleParallax.scss";

import TitleParallaxDesktop from "./Desktop/TitleParallaxDesktop";
import TitleParallaxMobile from "./Mobile/TitleParallaxMobile";

interface PropType { 
    offset: number
}


export default function TitleParallax({ offset }: PropType) {
    const platform = useContext<PlatformGlobalContent>(PlatformContext);
    const isMobile = platform === "mobile";

    return (
        <section
            className="title-section"
            style={{
                backgroundImage: isMobile ? `url(${Stars})` : undefined
            }}
        >
            {isMobile
                ? <TitleParallaxMobile />
                : <TitleParallaxDesktop offset={offset} />
            }
        </section>
    );
}