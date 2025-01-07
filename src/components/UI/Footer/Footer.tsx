import Logo from "@/static/img/spellward_logo.png";

import "./Footer.scss";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content-container">
                <div className="links-container">
                    <div className="footer-logo-container">
                        <img src={Logo} alt="" />
                    </div>

                    {/* <a className="footer-link">
                        Spellward Wiki
                    </a> */}

                    <a className="footer-link">
                        Наш Youtube
                    </a>

                    <a className="footer-link">
                        contact@ecspezi.com
                    </a>
                </div>
            </div>

            <h3 className="license-text">Игра Space Station 14, Все ассеты и материалы являются собственностью своих владельцев. Логотип и название “Spellward” являются собственностью Волкова Михаила Борисовича</h3>
        </footer>
    );
}