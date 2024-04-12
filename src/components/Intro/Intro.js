import headshot from './img/headshot.jpg';
import email from './img/email.png';
import arrow from './img/arrow.png';

import './Intro.css';

export default function Intro() {
    return (
        <div id="intro-box">
            <h1 id="name">Amanda Ma</h1>
            <img src={headshot} id="headshot" alt="logo" />
            <p id="specialty">
            Results‐driven data professional with 1.5 years of experience using big data technologies to deliver impactful outcomes in product analytics.
            </p>
            <p id="job-title">
                behavioral integrity <b>data engineer</b> at <b>Meta</b> from 2022-23
            </p>
            <p id="school"> 
                <b>UC Berkeley BA Data Science '21</b>
            </p>
            <div id="links">
                <a href="https://www.linkedin.com/in/mandiema/" target="_blank">LinkedIn</a>
                <a href="https://drive.google.com/file/d/1jEhFrLgoQ2Lx88murPSkJoNqpKTT5_fp/view?usp=sharing" target="_blank">Resume</a>
                <a href="https://github.com/mandiema" target="_blank">Github</a>
                <a href="https://medium.com/@amanda_ma98" target="_blank">Medium</a>
                <a href="https://adplist.org/members/amanda-ma" target="_blank">ADPList</a>
            </div>
            <div id="email">
                <img src={email} width="4%"/>
                amanda_ma98@berkeley.edu 
            </div>
            <div id="scroll-arrow">
                <img src={arrow} width="3%"></img>
                <img src={arrow} width="3%"></img>
                <img src={arrow} width="3%"></img>
            </div>
      </div>
    )
}

