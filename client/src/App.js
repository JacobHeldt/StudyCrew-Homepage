// React specific imports
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Imports for styling
import "./App.css";
import "./index.css";

// Importing individual components
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Mission from './components/Mission/Mission.jsx';
import Features from './components/Features/Features.jsx';
import Project from './components/Project/Project.jsx';
import SignUp from './components/SignUp/Signup.jsx';
import Team from './components/Team/Team.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  // State for the active page section
  const [activePage, setActivePage] = useState('');

  // Refs to target elements for the IntersectionObserver
  const missionRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const projectRef = React.useRef(null);
  const teamRef = React.useRef(null);
  const signupRef = React.useRef(null);

  useEffect(() => {
    // Cached ref nodes
    const missionNode = missionRef.current;
    const featuresNode = featuresRef.current;
    const projectNode = projectRef.current;
    const teamNode = teamRef.current;
    const signupNode = signupRef.current;

    // Callback to handle what happens when the elements intersect
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Setting the active page based on the intersecting component
          switch (entry.target.className) {
            case 'mission-component':
              setActivePage('mission');
              break;
            case 'features-component':
              setActivePage('features');
              break;
            case 'project-component':
              setActivePage('project');
              break;
            case 'empower-component':
              setActivePage('signup');
              break;
            case 'team-component':
              setActivePage('team');
              break;
            default:
              break;
          }
        }
      });
    };

    // Options for IntersectionObserver
    const options = {
      rootMargin: '-50% 0px -50% 0px',  // The callback is triggered when half of the target is visible.
      threshold: 0
    };

    // Setting up the IntersectionObserver
    const observer = new IntersectionObserver(callback, options);

    // Observing the refs
    if (missionNode) observer.observe(missionNode);
    if (featuresNode) observer.observe(featuresNode);
    if (projectNode) observer.observe(projectNode);
    if (teamNode) observer.observe(teamNode);
    if (signupNode) observer.observe(signupNode);

    // Cleanup function to unobserve the refs
    return () => {
      if (missionNode) observer.unobserve(missionNode);
      if (featuresNode) observer.unobserve(featuresNode);
      if (projectNode) observer.unobserve(projectNode);
      if (teamNode) observer.unobserve(teamNode);
      if (signupNode) observer.unobserve(signupNode);
    };
  }, []);

  // Component render
  return (
    <Router>
      {/* Header with page navigation props */}
      <Header 
        missionRef={missionRef} 
        featuresRef={featuresRef} 
        projectRef={projectRef}
        teamRef={teamRef}
        signupRef={signupRef}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Various site sections */}
      <Hero />

      <div className='mission-component' ref={missionRef}>
        <Mission />
      </div>

      <div className='features-component' ref={featuresRef}>
        <Features />
      </div>

      <div className='project-component' ref={projectRef}>
        <Project />
      </div>

      <div className="empower-component" ref={signupRef}>
        <SignUp />
      </div>

      <div className='team-component' ref={teamRef}>
        <Team />
      </div>

      {/* Footer */}
      <div className="footer-component">
        <Footer />
      </div>
    </Router>
  );
}

// Exporting the App component
export default App;