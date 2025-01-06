import VideoPlayer from "../VideoPlayer/VideoPlayer";

import "./InfoCard.scss";

interface PropType { 
    title: string,
    videoPath: string,
    children?: React.ReactNode
    orientation?: "left" | "right"
}


export default function InfoCard({ title, videoPath, orientation, children }: PropType) {
    const Video = () => (
        <div className="video-card-container">
            <VideoPlayer src={videoPath} />
        </div>
    );

    const Child = () => (
        <div className="card-text-container">
            {children}
        </div>
    );
    
    return (
        <div className="info-card">
            <h1 className="card-header">{title}</h1>

            <div className="info-container">
                {orientation == "left"
                    ? (
                        <>
                            <Child />
                            <Video />
                        </>
                    )
                    : (
                        <>
                            <Video />
                            <Child />
                        </>
                    )
                }
            </div>
        </div>
    );
}