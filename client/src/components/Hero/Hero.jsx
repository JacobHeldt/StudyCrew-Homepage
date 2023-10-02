// Importing necessary libraries and components
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import './Hero.css'; // Importing styling specific to the Hero component
import { FaChevronRight } from 'react-icons/fa';

/**
 * Hero Component
 * 
 * This component represents the hero section of a webpage, typically used
 * on the landing page. It contains a title, a description, and a group of buttons.
 * 
 * The title has decorative SVG elements and the description emphasizes certain words
 * with a primary text color. The buttons navigate to the waitlist page and have different
 * styles and sizes.
 * 
 * @returns {React.Element} The rendered Hero component.
 */
const Hero = () => {
    return (
        <div className="hero-container">
          {/* Title with decorative SVG elements */}
          <h1 className="title title-sm">
            The{" "}
            <span className="relative-span text-primary">
              <svg aria-hidden="true" viewBox="0 0 418 42" className="blue-wave" preserveAspectRatio="none"></svg>
              <span className="relative-span heading-font">Future </span>
            </span> 
            of Education is
            <span className="relative-span text-primary">
              <svg aria-hidden="true" viewBox="0 0 418 42" className="blue-wave" preserveAspectRatio="none"></svg>
              <span className="relative-span heading-font"> Collaborative</span>
            </span>
          </h1>
          
          {/* Description with emphasized words */}
          <p className="description">
            Opening doors to <b className="primary-text-color">accessible</b>, <b className="primary-text-color">collaborative</b> and <b className="primary-text-color">engaging</b> learning experiences
          </p>
          
          {/* Group of buttons with different styles and sizes */}
          <div className="button-group">
            <Link to="/waitlist">
            <Button size="big">Join Waitlist <FaChevronRight className="icon-inline" /></Button>
            </Link>
            <Link to="/waitlist">
              <Button variant="outline" size="big-outline">Learn More</Button>
            </Link>
          </div>
        </div>
    );
}

// Exporting the Hero component for use in other files
export default Hero;