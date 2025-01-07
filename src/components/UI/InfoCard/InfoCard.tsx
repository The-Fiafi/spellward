import { useContext } from "react";

import PlatformContext, { PlatformGlobalContent } from "@/context/PlatformContext/PlatformContext";

import VideoPlayer from "@UI/VideoPlayer/VideoPlayer";
import Button from "@UI/Button/Button";

import "./InfoCard.scss";


interface PropType { 
    title: string,
    videoPath: string,
    buttonText: string,
    children?: React.ReactNode
    orientation?: "left" | "right"
}


export default function InfoCard({ title, videoPath, orientation, buttonText, children }: PropType) {
    const platform = useContext<PlatformGlobalContent>(PlatformContext);
    const isMobile = platform === "mobile";
    
    const Video = (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props} className="video-card-container">
            <VideoPlayer src={videoPath} buttonText={isMobile ? buttonText : null} />
        </div>
    );

    const Child = (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props} className="card-text-container">
            {children}
            {!isMobile ? <Button>{buttonText}</Button> : <></>}
        </div>
    );
    
    return (
        <div className="info-card">
            <h1 className="card-header">{title}</h1>

            <div className="info-container">
                {orientation == "left" && !isMobile
                    ? (
                        <>
                            <Child style={{marginRight: "3vw"}} />
                            <Video />
                        </>
                    )
                    : (
                        <>
                            <Video style={{marginRight: "3vw"}} />
                            <Child />
                        </>
                    )
                }
            </div>
        </div>
    );
}