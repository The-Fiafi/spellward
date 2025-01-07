import Discord from "@/static/svg/discord.svg";
import Telegram from "@/static/svg/telegram.svg";
import Youtube from "@/static/svg/youtube.svg";

import "./HowToPlay.scss";

import MediaButton from "@/components/UI/MediaButton/MediaButton";


export default function HowToPlay() {
    return (
        <section className="how-to-play-section">
            <div className="how-to-play-header-text">
                <h1 className="card-header">Как начать играть?</h1>
                <div className="roles-subheader-text">
                    <h2 className="card-subheader">Spellward - это глобальная конверсия на игру Space Station 14, которую мы активно разрабатываем уже 1.5 года.</h2>
                    <h2 className="card-subheader">Следите за прогрессом, подключайтесь:</h2>
                </div>
            </div>

            <div className="links-container">
                <MediaButton
                    targetColor="#5662F6"
                    MediaSvg={Discord}
                    divProps={{
                        onClick: () => window.open("https://discord.imperialspace.net/")
                    }}
                >
                    DISCORD
                </MediaButton>

                <MediaButton
                    targetColor="#28A8E9"
                    MediaSvg={Telegram}
                    divProps={{
                        onClick: () => window.open("https://t.me/impspace")
                    }}
                >
                    TELEGRAM
                </MediaButton>

                <MediaButton
                    targetColor="#FF0033"
                    MediaSvg={Youtube}
                    divProps={{
                        onClick: () => window.open("https://youtube.com/@imperial_space")
                    }}
                >
                    YOUTUBE
                </MediaButton>
            </div>
        </section>
    );
}