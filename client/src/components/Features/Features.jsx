import React, { useRef, useState, useEffect, useCallback } from 'react';
import "./Features.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import stages from '../../data/featureData';

function Features() {
  const owlCarousel = useRef();
  const cardsContainer = useRef();
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(1);
  const [limit, setLimit] = useState(6);

  // Function to scroll left
  const scrollLeft = () => {
    const cardWidth = cardsContainer.current.firstChild.offsetWidth;
    if (index > 1) {
        setCardWidth(prevCardWidth => prevCardWidth + cardWidth + 324); 
        setIndex(prevIndex => prevIndex - 1);
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    const cardWidth = cardsContainer.current.firstChild.offsetWidth;
    if (limit > index) {
        setCardWidth(prevCardWidth => prevCardWidth - cardWidth - 324); 
        setIndex(prevIndex => prevIndex + 1);
    }
  };


  // Function to handle click on stage for larger screens
  const accordian = (id) => {
    let ele = owlCarousel.current.children;
    switch (id) {
      case "stage-1":
        // Show the appropriate content for stage 1
        ele[1].style.display = "grid";
        ele[3].style.display = "none";
        ele[5].style.display = "none";
        break;
      case "stage-2":
        // Show the appropriate content for stage 2
        ele[1].style.display = "none";
        ele[3].style.display = "grid";
        ele[5].style.display = "none";
        break;
      case "stage-3":
        // Show the appropriate content for stage 3
        ele[1].style.display = "none";
        ele[3].style.display = "none";
        ele[5].style.display = "grid";
        break;
      default:
        console.warn("Unexpected id:", id);
        break;
    }
  }
  // Function to handle click on stage for smaller screens (mobile)
  const mobileAccordian = (id) => {
    let ele = owlCarousel.current.children;
    switch (id) {
      case "stage-1":
        // Toggle the display of content for stage 1
        ele[1].style.display = ele[1].style.display === "grid" ? "none" : "grid";
        break;
      case "stage-2":
        // Toggle the display of content for stage 2
        ele[3].style.display = ele[3].style.display === "grid" ? "none" : "grid";
        break;
      case "stage-3":
        // Toggle the display of content for stage 3
        ele[5].style.display = ele[5].style.display === "grid" ? "none" : "grid";
        break;
      default:
        console.warn("Unexpected id:", id);
        break;
    }
  }

  useEffect(() => {
    accordian("stage-1"); 
  }, []);

  // Function to reset values on window resize
  const resetValue = useCallback(() => {
    if (window.innerWidth < 521) {
      setLimit(6);
    } else if (window.innerWidth < 861) {
      setLimit(5);
    } else {
      setLimit(4);
    }
    setCardWidth(0);
    setIndex(1);
    accordian("stage-1")
  }, []);
  
  useEffect(() => {
    window.addEventListener("resize", resetValue);
    return () => {
      window.removeEventListener("resize", resetValue);
    };
  }, [resetValue]);

  return (

    <div className="features">
      <div className="features-head">
        <h2>Our <span>Features</span></h2>
        <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at a dolor voluptatum.</p>
      </div>
      <div className="container">
        {/* Stages for larger screens */}
        <div className="stages">
          {stages.map(stage => (
            <div key={stage.id} className="stage" onClick={() => accordian(stage.id)}>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>

        {/* Owl carousel wrapper */}
        <div className="owl-carousel-wrapper" ref={owlCarousel}>
          {stages.map(stage => (
            <React.Fragment key={stage.id}>
              <div className="none stage" onClick={() => mobileAccordian(stage.id)}>
                <h1>{stage.title}</h1>
              </div>

              <div className="owl-carousel">
                <div className="cards" style={{ transform: `translateX(${cardWidth}px` }} ref={cardsContainer}>
                  {stage.cards.map(card => (
                    <div key={card.title} className="card">
                      <img className="card-image" src={card.image} alt={card.title} />
                      <h3 className="card-title">{card.title}</h3>
                      <p className="card-description">{card.description}</p>
                    </div>
                  ))}
              </div>
              {/* Arrow icons for carousel */}
              <div className="arrow-icons">
                <BsArrowLeftShort onClick={scrollLeft} size={50} className="arrow-left" />
                <BsArrowRightShort size={50} onClick={scrollRight} className="arrow-right" />
           
            </div>
          </div>

          </React.Fragment>

          ))}

        </div>
      </div>
    </div>
  );
}



export default Features;
