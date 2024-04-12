import headshot from './img/headshot.jpg';
import email from './img/email.png';
import arrow from './img/arrow.png';
import ButtonGrid from './ButtonGrid';

import './Intro.css';

export default function Intro() {
    return (
        <div id="intro-box">
            <h1 id="name">Amanda Ma</h1>
            <img src={headshot} id="headshot" alt="logo" />
            <p id="specialty">
                analytics engineer • data scientist <br></br>
            </p>
            <div id="experience">
            <p id="berkeley">
            <b>UC Berkeley BA, Data Science</b>
            </p>
            <p id="work">
            <b>Meta Inc., Data Engineer</b>
            </p>
            </div>
            <ButtonGrid/>
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

