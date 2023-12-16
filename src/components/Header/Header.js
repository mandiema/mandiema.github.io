import headshot from './headshot.jpg';
import email from './email.png';
import arrow from './arrow.png';

export default function Header() {
    return (
        <div className="profile-header">
            <h1>Amanda Ma</h1>
            <img src={headshot} className="headshot" alt="logo" />
            <p id="specialty">
            specializes in <b><i>data engineering, machine learning & analytics</i></b>
            </p>
            <p id="job-title">
            behavioral integrity <b>data engineer</b> at <b>Meta</b> from 2022-23
            </p>
            <p id="school"> 
            <b>UC Berkeley BA Data Science '21</b>
            </p>
            <a href="https://www.linkedin.com/in/mandiema/" target="_blank">LinkedIn </a>
            <a href="https://drive.google.com/file/d/1iXgByv0DVqTEMb96nAEs0XgvF4reslfm/view?usp=sharing" target="_blank">Resume </a>
            <a href="https://github.com/mandiema" target="_blank">Github</a>
            <h6>
                <img src={email} width="4%"/> amanda_ma98@berkeley.edu 
            </h6>
            <p id="note">
                <b>I am currently working on developing this site and adding
                my projects - check back later! :)</b>
            </p>
            <section id="scroll-arrow">
                <img src={arrow} width="3%"></img>
                <img src={arrow} width="3%"></img>
                <img src={arrow} width="3%"></img>
            </section>
      </div>
    )
}

