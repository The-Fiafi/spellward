import { useEffect, useState } from "react";

import PlatformContext, { PlatformGlobalContent } from "./context/PlatformContext/PlatformContext";

import Background from "@/static/img/background.jpg";

import "./App.scss";

import TitleParallax from "./components/PageSections/TitleParallax/TitleParallax";
import InfoCards from "./components/PageSections/InfoCards/InfoCards";
import Roles from "./components/PageSections/Roles/Roles";
import HowToPlay from "./components/PageSections/HowToPlay/HowToPlay";
import Footer from "./components/UI/Footer/Footer";


export default function App() {
    var [platformState, setPlatformState] = useState<PlatformGlobalContent>("mobile");

    useEffect(() => {
        setPlatformState(
            window.screen.width > window.screen.height
                ? "desktop"
                : "mobile"
        );
    }, []);

    return (
        <PlatformContext.Provider value={platformState}>
            <div className="app">
                <div className="title-container">
                    <TitleParallax offset={0} />
                </div>

                <div
                    className="info-background"
                    style={{ backgroundImage: `url(${Background})` }}
                >
                    <InfoCards />
                    <Roles />
                    <HowToPlay />
                    <Footer />
                </div>
            </div>
        </PlatformContext.Provider>
    );
};