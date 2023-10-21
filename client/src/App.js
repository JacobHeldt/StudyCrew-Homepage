// React specific imports
import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// Imports for styling
// import logo from './logo.svg';
import "./App.css";
import "./index.css";

// Import components
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Mission from './components/Mission/Mission.jsx';
import Features from './components/Features/Features.jsx';
import Project from './components/Project/Project.jsx';
import Empower from './components/Empower/Empower.jsx';
import Team from './components/Team/Team.jsx';
import Footer from './components/Footer/Footer';


function App() {
  const missionRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const projectRef = React.useRef(null);
  const teamRef = React.useRef(null);

  return (
    <Router>
      < Header 
        missionRef={missionRef} 
        featuresRef={featuresRef} 
        projectRef={projectRef}
        teamRef={teamRef}
      />

      < Hero />

      <div className='mission-component' ref={missionRef}>
      < Mission/>
      </div>

      <div className='features-component' ref={featuresRef}>
      < Features />
      </div>

      <div className='project-component' ref={projectRef}>
      < Project />
      </div>
      <div className="empower-component">
          <Empower/>
      </div>

      <div className='team-component' ref={teamRef}>
        <Team />
      </div>

      <div className="footer-component">
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
