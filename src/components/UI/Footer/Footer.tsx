import Logo from "@/static/img/spellward_logo.png";

import "./Footer.scss";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content-container">
                <div className="links-container">
                    <div className="footer-link footer-logo-container">
                        <img src={Logo} alt="" />
                    </div>

                    {/* <a className="footer-link">
                        Spellward Wiki
                    </a> */}

                    <p
                        className="footer-link"
                        onClick={() => window.open("https://youtube.com/@imperial_space")}
                    >
                        Наш Youtube
                    </p>

                    <p className="footer-link">
                        contact@ecspezi.com
                    </p>
                </div>
            </div>

            <h3 className="license-text">Игра Space Station 14, Все ассеты и материалы являются собственностью своих владельцев. Логотип и название “Spellward” являются собственностью Волкова Михаила Борисовича</h3>
        </footer>
    );
}