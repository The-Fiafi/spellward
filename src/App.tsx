import SpellWardLogo from "@/static/spellward_logo.png";

import "./App.scss";

import TitleParallax from "./components/PageParts/TitleParallax/TitleParallax";


export default function App() {
    return (
        <div className="app">
            <div className="title-container">
                <div className="spellward-title-logo-container">
                    <img src={SpellWardLogo} className="spellward-title-logo"/>
                </div>
        
                <TitleParallax offset={0} />
            </div>
        </div>
    );
};