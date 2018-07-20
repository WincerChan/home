import React from 'react';
import Arrow from './Arrow';
import Contact from './Contact'

const AboutMe = [
    "宅",
    "喜自由 · 享受创作",
    "半调子前端 · 钟爱 Python · 折腾 Go",
    "CARPE DIEM",
]

const About = () => (
    <section className="hero is-fullheight bg">
        <div className="container about has-text-lefted">
            <h4 className="subtitle is-5">About me </h4>
            {
                AboutMe.map((item, i) => <span key={i} className="about-me">{item}<br /></span>)
            }
        </div>
        <Contact />
        <div className="has-text-centered">
            <svg className="arrows">
                <path class="a1" d="M0 10 L30 32 L60 10"></path>
                <path class="a2" d="M0 25 L30 47 L60 25"></path>
                <path class="a3" d="M0 40 L30 62 L60 40"></path>
            </svg>
        </div>
    </section>
)

export default About;