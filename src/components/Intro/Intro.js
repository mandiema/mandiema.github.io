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
                specializes in <b><i>data engineering, machine learning & analytics</i></b>
            </p>
            <p id="job-title">
                behavioral integrity <b>data engineer</b> at <b>Meta</b> from 2022-23
            </p>
            <p id="school"> 
                <b>UC Berkeley BA Data Science '21</b>
            </p>
            <div id="links">
                <a href="https://www.linkedin.com/in/mandiema/" target="_blank">LinkedIn</a>
                <a href="https://drive.google.com/file/d/1gtgCCvZ4kcMqpC9WkhPSJfCdjpXFeyHu/view?usp=sharing" target="_blank">Resume</a>
                <a href="https://github.com/mandiema" target="_blank">Github</a>
            </div>
            <div id="email">
                <img src={email} width="4%"/>
                amanda_ma98@berkeley.edu 
            </div>
            <p id="note">
                <b>I am currently working on developing this site and adding
                my projects - check back later! :)</b>
            </p>
            <div id="scroll-arrow">
                <img src={arrow} width="3%"></img>
                <img src={arrow} width="3%"></img>
                <img src={arrow} width="3%"></img>
            </div>
      </div>
    )
}

