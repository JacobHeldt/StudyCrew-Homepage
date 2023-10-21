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
import Features from './components/Features/Features.jsx';
import Project from './components/Project/Project.jsx';
import Empower from './components/Empower/Empower.jsx';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      < Hero />
      <div className='mission-component'>
      < Mission />
      </div>
      <div className='features-component'>
      < Features />
      </div>
      <div className='project-component'>
      < Project />
      </div>
      <div className="empower-component">
          <Empower/>
      </div>
      <div className="footer-component">

      <Footer/>
      </div>
    </Router>
  );
}

export default App;
