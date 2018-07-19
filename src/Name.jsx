import React from 'react';
import Github from './github.svg';
import Blog from './blog.svg';

const Name = () => (
    <section className="hero is-fullheight">
        <div className="container name has-text-centered">
            <h4 className="subtitle is-5">hi, I'm <strong>Wincer</strong> /ˈwɪnsə(r)/ </h4>
            <div className="tabs is-centered">
                <ul>
                    <li className="is-info is-outlined">
                        <a href="https://github.com/WincerChan"><img src={Blog} alt="" />
                            <span className="subtitle is-6 has-text-info">&nbsp;Blog</span>
                        </a>
                    </li>
                    <li className="is-info is-outlined">
                        <a href="https://blog.itswincer.com/"><img src={Github} alt="" />
                            <span className="subtitle is-6 has-text-info">&nbsp;GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section >
)

export default Name;