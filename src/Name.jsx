import React from 'react';
import Github from './svg/github.svg';
import Blog from './svg/blog.svg';
import Arrow from './Arrow';
import Contact from './Contact'


const Name = () => (
    <section className="hero is-fullheight bg">
        <div className="container name has-text-centered">
            <h4 className="subtitle is-5">hi, I'm <strong>Wincer</strong> /ˈwɪnsə(r)/ </h4>
            <div className="tabs is-centered">
                <ul>
                    <li className="is-info is-outlined showdelay">
                        <a href="https://blog.itswincer.com/"><img src={Blog} alt="" />
                            <span className="subtitle is-6 has-text-info">&nbsp;Blog</span>
                        </a>
                    </li>
                    <li className="is-info is-outlined showdelay">
                        <a href="https://github.com/WincerChan"><img src={Github} alt="" />
                            <span className="subtitle is-6 has-text-info">&nbsp;GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Contact />
        <Arrow />
    </section >
)

export default Name;