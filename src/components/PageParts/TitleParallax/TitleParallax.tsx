import Stars from "@/static/stars.png";
import ForestBack from "@/static/forest_back.png";
import ForestFront from "@/static/forest_front.png";
import Mountain from "@/static/mountain.png";

import "./TitleParallax.scss";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

interface PropType { 
    offset: number
}

export default function TitleParallax({ offset }: PropType) {
    return (
        <Parallax
            pages={2}
            style={{ top: "0", left: "0" }}
            className="parallax-title-container"
        >
            <ParallaxLayer
                offset={offset}
                speed={0.1}
                className="spellward-stars-container"
            >
                <img src={Stars} className="spellward-stars"/>
            </ParallaxLayer>


            <ParallaxLayer
                offset={offset + 0.85}
                speed={-0.01}
                className="spellward-mountain-container"
            >
                <img src={Mountain} className="spellward-mountain"/>
            </ParallaxLayer>

            <ParallaxLayer
                offset={offset + 1}
                speed={0.5}
                className="spellward-forest-back-container"
            >
                <div className="forest-background-container">
                    <img src={ForestBack} className="spellward-forest-back"/>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={offset + 1.05}
                speed={0.3}
                className="spellward-forest-front-container"
            >
                <div className="forest-background-container">
                    <img src={ForestFront} className="spellward-forest-front"/>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}