import React from 'react';
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
    <div class="tile is-ancestor">
        <div class="tile is-parent is-3">
            <article class="tile is-child notification one showdelay">
                <p class="subtitle">DIEM API</p>
                <p class="dontShow">There are Two APIs: Hitokoto and Netease Cloud Music.</p>
            </article>
        </div>
        <div class="tile is-vertical is-4">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification two showdelay">
                        <p class="subtitle">Meme</p>
                        <p class="dontShow">A tool(Written by JavaScript) for generate meme.</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification three showdelay">
                        <p class="subtitle">Douban Export</p>
                        <p class="dontShow">Export all Douban items which marked.</p>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification four showdelay">
                    <p class="subtitle">QQMusic Parse</p>
                    <p class="dontShow">JavaScript parse for QQ music.</p>
                </article>
            </div>
        </div>
    </div>
)

const Footer = () => (
    <section className="hero is-fullheight bg">
        <div className="container project">
            <div className="bd-footer-stars columns">
                <BdFooterStars />
            </div>
        </div>
        <footer className="footer">
            <div className="content has-text-centered">
                ©2017 - {new Date().getFullYear()} <span id="heart">♥</span> Made by <a href="https://diem.im">Wincer</a>.
            </div>
        </footer>
    </section>

)

export default Footer;