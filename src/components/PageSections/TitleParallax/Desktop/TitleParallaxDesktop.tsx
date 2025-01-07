
import Stars from "@/static/img/stars.png";
import ForestBack from "@/static/img/forest_back.png";
import ForestFront from "@/static/img/forest_front.png";
import Mountain from "@/static/img/mountain.png";
import SpellWardLogo from "@/static/img/spellward_logo.png";


import "./TitleParallaxDesktop.scss";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

interface PropType { 
    offset: number
}


export default function TitleParallaxDesktop({ offset }: PropType) {
    return (
        <>
            <div className="spellward-title-logo-container-desktop">
                <img src={SpellWardLogo} className="spellward-title-logo-desktop"/>
            </div>
            
            <Parallax
                pages={2}
                style={{ top: "0", left: "0" }}
                className="parallax-title-container-desktop"
            >
                <ParallaxLayer
                    offset={offset}
                    speed={0.1}
                    className="spellward-stars-container-desktop"
                >
                    <img src={Stars} className="spellward-stars-desktop"/>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={offset + 0.85}
                    speed={-0.01}
                    className="spellward-mountain-container-desktop"
                >
                    <img src={Mountain} className="spellward-mountain-desktop"/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={offset + 1}
                    speed={0.5}
                    className="spellward-forest-back-container-desktop"
                >
                    <div className="forest-background-container-desktop">
                        <img src={ForestBack} className="spellward-forest-back-desktop"/>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={offset + 1.05}
                    speed={0.3}
                    className="spellward-forest-front-container-desktop"
                >
                    <div className="forest-background-container-desktop">
                        <img src={ForestFront} className="spellward-forest-front-desktop"/>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}