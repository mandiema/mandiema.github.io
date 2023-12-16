import Intro from './components/Intro/Intro.js';
import ProjectGrid from './components/project/ProjectGrid.js';

import './App.css';


function App() {
  return (
    <div className="App">

      <section id='intro-background'>
        <Intro/>
      </section>

      {/* project background */}
      <section className='Project'>
        <h1>Projects</h1>
        <ProjectGrid />
      </section>
      
      <section className='Footer'>
      © Amanda Ma, 2023
      </section>
    </div>
  );
}

export default App;
