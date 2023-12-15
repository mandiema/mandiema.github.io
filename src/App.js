import Header from './components/Header/Header.js';
import ProjectGrid from './components/project/ProjectGrid.js';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <section className='Project'>
      <Project {...{image:img, 
        title:"Latent Dirichlet Allocation", 
        description:"Fall'19 Data Consulting Deliverable, SAAS"}}/> */}
      {/* </section> */}
      {/* <ProjectGrid /> */}
    </div>
  );
}

export default App;
