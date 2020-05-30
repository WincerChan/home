import React from 'react';

const BdFooterStars = () => (
    <div class="tile is-ancestor">
        <div class="tile is-parent is-3">
            <article class="tile is-child notification one showdelay">
                <a href="https://api.itswincer.com" class="jump">
                    <div className="jump">
                        <p class="subtitle">DIEM API</p>
                        <p class="dontShow">There are Two APIs: Hitokoto and Netease Cloud Music.</p>
                    </div>
                </a>
            </article>
        </div>
        <div class="tile is-vertical is-4">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification two showdelay">
                        <a href="https://meme.itswincer.com" class="href">
                            <div className="jump">
                                <p class="subtitle">Meme</p>
                                <p class="dontShow">A tool(Written by JavaScript) for generate meme.</p>
                            </div>
                        </a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification three showdelay">
                        <a href="https://github.com/WincerChan/douban-import" class="href">
                            <div className="jump">
                                <p class="subtitle">Douban Export</p>
                                <p class="dontShow">Export all Douban items which marked.</p>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification four showdelay">
                    <a href="https://github.com/WincerChan/QQMusic-Parse" class="href">
                        <div className="jump">
                            <p class="subtitle">QQMusic Parse</p>
                            <p class="dontShow">JavaScript parse for QQ music.</p>
                        </div>
                    </a>
                </article>
            </div>
        </div>
    </div>
)

const Footer = () => (
    <div className="section">
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
    </div>
)

// const Footer = () => (
//     <div className="section">
//         <section>
//             <p>Section 2</p>
//         </section>
//     </div>
// )

export default Footer;