// React specific imports
import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Imports for styling
// import logo from './logo.svg';
import './App.css';
import './index.css'; 

// Import components
import Hero from './components/Hero/Hero.jsx';
import Mission from './components/Mission/Mission.jsx';
// import Features from './components/Features/Features.jsx';
import Project from './components/Project/Project.jsx';


function App() {
  return (
    <Router>
      < Hero />
      < Mission/>
      < Project className="project-margin"/>
      {/* < Features/> */}
    </Router>
  );
}

export default App;
