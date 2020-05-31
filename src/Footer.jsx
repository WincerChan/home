import React from 'react';

const BdFooterStars = () => (
    <div className="tile is-ancestor">
        <div className="tile is-parent is-3">
            <article className="tile is-child notification one showdelay">
                <a href="https://api.itswincer.com" className="jump">
                    <div className="jump">
                        <p className="subtitle">DIEM API</p>
                        <p className="dontShow">Provide Hitokoto, Netease Cloud Music and Google Analytics APIs.</p>
                    </div>
                </a>
            </article>
        </div>
        <div className="tile is-vertical is-4">
            <div className="tile">
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification two showdelay">
                        <a href="https://meme.itswincer.com" className="href">
                            <div className="jump">
                                <p className="subtitle">Meme</p>
                                <p className="dontShow">A tool (Written by JavaScript) for generate meme.</p>
                            </div>
                        </a>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification three showdelay">
                        <a href="https://github.com/WincerChan/douban-export" className="href">
                            <div className="jump">
                                <p className="subtitle">Douban Export</p>
                                <p className="dontShow">Export all Douban items which marked.</p>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification four showdelay">
                    <a href="https://github.com/WincerChan/mirror" className="href">
                        <div className="jump">
                            <p className="subtitle">Mirror</p>
                            <p className="dontShow">Golang reverse proxy tool.</p>
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