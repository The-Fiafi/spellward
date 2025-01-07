import VideoPlayer from "../VideoPlayer/VideoPlayer";

import "./InfoCard.scss";

interface PropType { 
    title: string,
    videoPath: string,
    children?: React.ReactNode
    orientation?: "left" | "right"
}


export default function InfoCard({ title, videoPath, orientation, children }: PropType) {
    const Video = (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props} className="video-card-container">
            <VideoPlayer src={videoPath} />
        </div>
    );

    const Child = (props: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props} className="card-text-container">
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