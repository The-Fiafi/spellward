import Video from "@/static/video/ValorantPlay.mp4";

import "./InfoCards.scss";

import InfoCard from "@/components/UI/InfoCard/InfoCard";
import Button from "@/components/UI/Button/Button";


export default function InfoCards() {
    return (
        <div className="info-content">
            <InfoCard
                title="Приключения зовут!"
                orientation="right"
                videoPath={Video}
            >
                <div className="cards-text-container">
                    <p>Вы очутились на средневековом острове, охваченным сильным магическим проклятьем: мертвые восстают из под земли, чтобы пополнить свою армию живыми.</p>
                    <p>К счастью, архимаги местного чародейского совета успели создать магический барьер: Spellward, из-за которого немногочисленные жители все ещё живы. Уникальный опыт средневековья в РП атмосфере.</p>
        
                    <Button>Смотреть трейлер</Button>
                </div>
            </InfoCard>

            <InfoCard
                title="Используй магию"
                orientation="left"
                videoPath={Video}
            >
                <div className="cards-text-container">
                    <p>Магия огня и воды, света и тьмы - готова быть изучена для исполнения ваших целей.</p>
                    <p>Углубитесь в изучение самых таинственных заклинаний, или поставите себе на службу много простых? Возьмете ученика, или примкнете к старому магистру? Попытаетесь защитить остров, или станете жить как в последний день?</p>
        
                    <Button>Смотреть обзор</Button>
                </div>
            </InfoCard>

            <InfoCard
                title="Уникальный ролевой мир"
                orientation="right"
                videoPath={Video}
            >
                <div className="cards-text-container">
                    <p>Объединяйтесь с друзьями или сталкивайтесь лбами с вашими врагами: в ролевой игре возможны любые переплетения сюжета.</p>
                    <p>За нарушение закона вас могут арестовать легионеры. Маги заинтересуются свитками, которые вы нашли, а бандиты заинтересуются вообще всем содержимым вашего рюкзака.</p>
        
                    <Button>Больше о РП</Button>
                </div>
            </InfoCard>
        </div>
    );
}