import React from 'react';
import Contact from './Contact'

const footerStars = [
    {
        "name": "Meme",
        "url": "https://github.com/WincerChan/Meme-generator",
        "description": "A tool for generate meme.",
        "image": "https://bulma.io/images/footer/bootstrap-to-bulma.png",
        "refer": "View it on GitHub"
    },
    {
        "name": "Hitokoto",
        "url": "https://github.com/WincerChan/Hitokoto",
        "description": "A self-build hitokoto API.",
        "image": "https://bulma.io/images/footer/bootstrap-to-bulma.png",
        "refer": "View it on GitHub"
    },
    {
        "name": "QQMusic Parse",
        "url": "https://github.com/WincerChan/QQMusic-Parse",
        "description": "Pure JavaScript parse for QQ music.",
        "image": "https://bulma.io/images/footer/bootstrap-to-bulma.png",
        "refer": "View it on GitHub"
    }
]

const BdFooterStars = () => (
    <div className="bd-footer-stars column">
        {footerStars.map(footerStar =>
            <div className="bd-footer-star">
                <header className="bd-footer-star-header">
                    <h4 className="bd-footer-title">
                        <strong>{footerStar.name}</strong>
                    </h4>
                    <p className="bd-footer-subtitle">
                        {footerStar.description}
                    </p>
                </header>
                <figure className="bd-footer-star-figure">
                    <a rel="noopener noreferrer" target="_blank" class="button is-link is-outlined" href={footerStar.url}>
                        {footerStar.refer}
                    </a>
                </figure>
            </div>)}
    </div>
)

const Footer = () => (
    <section className="hero is-fullheight">
        <div className="container project">
            <div className="bd-footer-stars columns">
                <BdFooterStars />
            </div>
        <Contact />
        </div>
        <footer className="footer">
            <div className="content has-text-centered">
                ©2017 - 2018 <span id="heart">♥</span> Made by <a href="https://diem.im">Wincer</a>.
            </div>
        </footer>
    </section>

)

export default Footer;