import { Link } from "react-router-dom";
import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
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
          <p className="description">
            Opening doors to <b>accessible</b>, <b>collaborative</b> and <b>engaging</b> learning experiences
          </p>
          <div className="button-group">
            <Link to="/signIn">
              <Button>Join us</Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline">
                <span className="ml-3">Discover Our Courses</span>
              </Button>
            </Link>
          </div>
        </div>
      );
}

export default Hero