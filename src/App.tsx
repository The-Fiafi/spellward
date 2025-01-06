import SpellWardLogo from "@/static/img/spellward_logo.png";

import "./App.scss";

import TitleParallax from "./components/PageParts/TitleParallax/TitleParallax";
import InfoCards from "./components/PageParts/InfoCards/InfoCards";


export default function App() {
    return (
        <div className="app">
            <div className="title-container">
                <div className="spellward-title-logo-container">
                    <img src={SpellWardLogo} className="spellward-title-logo"/>
                </div>
        
                <TitleParallax offset={0} />
            </div>

            <InfoCards />
        </div>
    );
};