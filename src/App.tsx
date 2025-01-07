import { useEffect, useState } from "react";


import SpellWardLogo from "@/static/img/spellward_logo.png";
import Background from "@/static/img/background.jpg";

import "./App.scss";

import TitleParallax from "./components/PageSections/TitleParallax/TitleParallax";
import InfoCards from "./components/PageSections/InfoCards/InfoCards";
import Roles from "./components/PageSections/Roles/Roles";
import HowToPlay from "./components/PageSections/HowToPlay/HowToPlay";
import Footer from "./components/UI/Footer/Footer";
import PlatformContext from "./context/PlatformContext/PlatformContext";


export default function App() {
    var platformState = useState<"mobile" | "desktop">("mobile");

    useEffect(() => {
        platformState[1](
            window.screen.width > window.screen.height
                ? "desktop"
                : "mobile"
        );
    }, []);

    return (
        <PlatformContext.Provider value={platformState}>
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
                    <HowToPlay />
                    <Footer />
                </div>
            </div>
        </PlatformContext.Provider>
    );
};