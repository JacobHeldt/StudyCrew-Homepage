import './Navbar.css'

import { Link } from "react-router-dom";

const Navbar = ({activePage, setActivePage}) => {
  const isActive = name => activePage===name?'activeNavLink':'';
  return (<nav>
    <Link
      className={isActive('mission')}
      to="/mission"
      onClick={()=>setActivePage('mission')}
      >Mission
    </Link>
    <Link
      className={isActive('features')}
      to="/features"
      onClick={()=>setActivePage('features')}
      >Features
    </Link>
    <Link
      className={isActive('project')}
      to="/project"
      onClick={()=>setActivePage('project')}
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
