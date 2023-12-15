import headshot from './headshot.jpg';

export default function Header() {
    return (
        <div className="profile-header">
            <h1>Amanda Ma</h1>
            <img src={headshot} className="headshot" alt="logo" />
            <h3>
            UC Berkeley, BA Data Science (Applied Math & Modeling) '21
            </h3>
            <h4>
            Former Data Engineer @ Meta, 2022-23
            </h4>
            <h5>
                Email: amanda_ma98@berkeley.edu
            </h5>
            <a href="https://www.linkedin.com/in/mandiema/" target="_blank">LinkedIn </a>
            <a href="" target="_blank">Resume </a>
            <a href="https://github.com/mandiema" target="_blank">Github</a>
            <p>
                Hello! My name is Amanda, and I was born & raised in San Francisco. <br/>
                <b>I am currently working on developing this site and adding
                my projects - check back later! :)</b>
            </p>
      </div>
    )
}

