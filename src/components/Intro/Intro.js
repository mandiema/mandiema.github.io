import headshot from './img/headshot.jpg';
import email from './img/email.png';
import arrow from './img/arrow.png';
import ButtonGrid from './ButtonGrid';

import './Intro.css';

export default function Intro() {
    return (
        <div id="intro-box">

            <div id="main_content">
            <div id="intro-left">
                <h1 id="name">Amanda Ma</h1>
                <img src={headshot} id="headshot" alt="logo" />
                <p id="specialty">
                    analytics engineer • data enthusiast <br></br>
                </p>
            </div>

            <div id="intro-right">
                <div id="experience">
                    <p>
                    Hello! 👩🏻‍💻 <br></br>
                    A little bit about myself... <br></br>
                    I am Chinese-American, born and raised in San Francisco. 
                    My background includes studying <b>data science at UC Berkeley</b> and working as a <b>data engineer at Meta</b>. <br></br>
                    Outside of work, I enjoy dancing and indulging in matcha lattes.
                    </p>
                </div>
                <ButtonGrid/>
                <div id="email">
                    <img src={email} width="3%"/>
                    amanda_ma98@berkeley.edu 
                </div>
            </div>
            </div>
            
            <div id="scroll-arrow">
                <img src={arrow} width="3%"></img>
                <img src={arrow} width="3%"></img>
                <img src={arrow} width="3%"></img>
            </div>
            
      </div>
    )
}


