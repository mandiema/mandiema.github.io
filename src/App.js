import headshot from './headshot.jpg';

import Project from './components/project/Project.js';
import img from './components/project/img/wc.jpg';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Amanda Ma</h2>
        <img src={headshot} className="App-logo" alt="logo" />
        <p>
          This girl is working on her site!
        </p>
      </header>
      <section className='Project'>
      <Project {...{image:img, 
        title:"Latent Dirichlet Allocation", 
        description:"Fall'19 Data Consulting Deliverable, SAAS"}}/>
      </section>
    </div>
  );
}

export default App;
