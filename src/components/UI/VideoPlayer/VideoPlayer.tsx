import "./VideoPlayer.scss";

interface PropType {
    src: string
}

export default function VideoPlayer({ src }: PropType) {
    return (
        <div className="video-container" key={src}>
            <video autoPlay muted loop className="video">
                <source src={src} type="video/mp4"/>
            </video>
        </div>
    );
}