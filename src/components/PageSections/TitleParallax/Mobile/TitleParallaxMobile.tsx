import SpellWardLogo from "@/static/img/spellward_logo.png";
import ForestBack from "@/static/img/forest_back.png";
import ForestFront from "@/static/img/forest_front.png";
import Mountain from "@/static/img/mountain.png";


import "./TitleParallaxMobile.scss";


export default function TitleParallaxMobile() {
    return (
        <>
            <div className="spellward-title-logo-container-mobile">
                <img src={SpellWardLogo} className="spellward-title-logo-mobile"/>
            </div>

            <div className="spellward-mountain-container-mobile">
                <img src={Mountain} className="spellward-mountain-mobile"/>
            </div>

            <div className="spellward-forest-back-container-mobile">
                <img src={ForestBack} className="spellward-forest-back-mobile"/>
            </div>

            <div className="spellward-forest-front-container-mobile">
                <img src={ForestFront} className="spellward-forest-front-mobile"/>
            </div>
        </>
    );
}