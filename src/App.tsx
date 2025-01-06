import SpellWardLogo from "@/static/img/spellward_logo.png";
import Background from "@/static/img/background.jpg";

import "./App.scss";

import TitleParallax from "./components/PageParts/TitleParallax/TitleParallax";
import InfoCards from "./components/PageParts/InfoCards/InfoCards";
import Roles from "./components/PageParts/Roles/Roles";


export default function App() {
    return (
        <div className="app">
            <div className="title-container">
                <div className="spellward-title-logo-container">
                    <img src={SpellWardLogo} className="spellward-title-logo"/>
                </div>
        
                <TitleParallax offset={0} />
            </div>

            <div className="info-background" style={{ backgroundImage: `url(${Background})` }}>
                <InfoCards />
                <Roles />
            </div>
        </div>
    );
};