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
            <h6 className="subtitle is-6">About me </h6>
            {
                AboutMe.map((item, i) => <span key={i} className="about-me">{item}<br /></span>)
            }
        </div>
        <Contact />
        <Arrow />
    </section>
)

export default About;