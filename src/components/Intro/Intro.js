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
            <p>
            Hello! 👩🏻‍💻 <br></br>
            A little bit about myself... 
            I am Chinese-American, born and raised in San Francisco. 
            My background includes studying data science at UC Berkeley and working as a data engineer at Meta. <br></br>
            Outside of work, I enjoy dancing and indulging in matcha lattes.
            </p>
            </div>
            <ButtonGrid/>
            <div id="email">
                <img src={email} width="3%"/>
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

