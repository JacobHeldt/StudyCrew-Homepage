import './Navbar.css'

import { Link } from "react-router-dom";
import React, { useRef } from 'react';

const Navbar = ({activePage, setActivePage, missionRef, featuresRef, projectRef}) => {


  const isActive = name => activePage===name?'activeNavLink':'';

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleNavLinkClick = (name) => {
    let ref;
    switch (name) {
        case 'mission':
            ref = missionRef;
            break;
        case 'features':
            ref = featuresRef;
            break;
        case 'project':
            ref = projectRef;
            break;
        default:
            return;
    }
    scrollToRef(ref);
};

  return (<nav>
    <Link 
    className={isActive('mission')}
    onClick={() => {handleNavLinkClick('mission'); setActivePage('mission');}}
  >
      Mission
  </Link>
    <Link
      className={isActive('features')}
      onClick={() => {handleNavLinkClick('features'); setActivePage('features');}}
      >Features
    </Link>
    <Link
      className={isActive('project')}
      onClick={() => {handleNavLinkClick('project'); setActivePage('project');}}
      >Project
    </Link>
    <Link
      className={isActive('FAQs')}
      to="/FAQs"
      onClick={()=>setActivePage('FAQs')}
      >FAQs
    </Link>
    <Link
      className={isActive('about')}
      to="/about"
      onClick={()=>setActivePage('about')}
      >About Us
    </Link>
  </nav>);
}

export default Navbar;
