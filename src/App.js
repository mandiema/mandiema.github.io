import Header from './components/Header/Header.js';
import ProjectGrid from './components/project/ProjectGrid.js';

import './App.css';


function App() {
  return (
    <div className="App">

      {/* intro background */}
      <section className='Intro'>
        <Header/>
        {/* // insert dynamic downward pointing arrow here */}
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
