import Archmage from "@/static/img/roles/archmage.jpg";
import Legioner from "@/static/img/roles/legioner.jpg";
import Rebel from "@/static/img/roles/rebel.jpg";
import Bandit from "@/static/img/roles/bandit.jpg";
import Trader from "@/static/img/roles/trader.jpg";

import "./Roles.scss";

import RoleCard from "@/components/UI/RoleCard/RoleCard";

// This is not a best pratice... Poxyui

const rolesData = [
    {
        image: Archmage,
        name: "Архимаг",
        desc: "Используйте сильные чары, чтобы поддерживать барьер над островом. Руководите учениками и проследите, что замок коллегии не обокрали, пока вас небыло рядом."
    },
    {
        image: Legioner,
        name: "Легионер",
        desc: "Следуйте закону легиона, и убедитесь, что другие граждане тоже ему следуют. Сажайте в темницу нарушителей и собирайте налоги: во имя великого легата"
    },
    {
        image: Rebel,
        name: "Мятежник",
        desc: "Над островом нависла смерть, а Легат продолжает жить так, будто ничего не происходит? С товарищами вы создали мятежный город, и пытаетесь понять, как выжить дальше."
    },
    {
        image: Bandit,
        name: "Разбойник",
        desc: "Кто посмеет указать вам, как жить - получит кинжалом в пузо. Воруйте и грабье честный народ. Конец света не так страшен, если встречать его на горе золота."
    },
    {
        image: Trader,
        name: "Торговец",
        desc: "Вы заключили контракт с дьяволом, и он создал для вас портал с бесконечными товарами. Но контракты, как известно, имеют пункты с для обеих сторон..."
    }
];

export default function Roles() {
    return (
        <section className="roles-section">
            <div className="roles-header">
                <h1 className="card-header">Выбирайте свой путь</h1>
                <div className="roles-subheader-text">
                    <h2 className="card-subheader">Уникальных ролей в Spellward: 74</h2>
                    <h2 className="card-subheader">Кем станете вы?</h2>
                </div>
            </div> 


            <div className="available-roles">
                {rolesData.map((el, i) => (
                    <RoleCard imagePath={el.image} key={i}>
                        <div className="role-info-container">
                            <h3 className="role-info-text-header">{el.name}</h3>
                            <p className="role-info-text">{el.desc}</p>
                        </div>
                    </RoleCard>
                ))}
            </div>
        </section>
    );
}