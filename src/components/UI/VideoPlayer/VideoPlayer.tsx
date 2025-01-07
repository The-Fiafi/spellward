import "./VideoPlayer.scss";

import Button from "@UI/Button/Button";


interface PropType {
    src: string,
    buttonText?: string,
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export default function VideoPlayer({ src, buttonText, buttonProps }: PropType) {
    return (
        <div className="video-container" key={src}>
            <video autoPlay muted loop className="video">
                <source src={src} type="video/mp4"/>
            </video>

            {buttonText 
                ? (
                    <Button
                        style={{
                            position: "absolute",
                            fontSize: "4vw",
                            borderRadius: "5vw",
                            bottom: 10
                        }}
                        {...buttonProps}
                    >
                        {buttonText}
                    </Button>
                ) 
                : <></>
            }
        </div>
    );
}