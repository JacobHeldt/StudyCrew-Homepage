import React, { useRef, useState, useEffect } from 'react'; // Removed useCallback
import "./Features.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import stages from '../../data/featureData';

function Features() {
  const owlCarousel = useRef();
  const cardsContainer = useRef();
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(1);
  const [limit, setLimit] = useState(6);
  const [currentStage, setCurrentStage] = useState('stage-1');

  // Function to handle scrolling left in the carousel
  const scrollLeft = () => {
    const cardWidth = cardsContainer.current.firstChild.offsetWidth;
    let scrollValue = cardWidth + 322;  // default value

    if (currentStage === 'stage-3') {
      scrollValue = cardWidth + 30;  // adjust for stage 3
    }

    if (index > 1) {
      setCardWidth(prevCardWidth => prevCardWidth + scrollValue); 
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  // Function to handle scrolling right in the carousel
  const scrollRight = () => {
    const cardWidth = cardsContainer.current.firstChild.offsetWidth;
    let scrollValue = cardWidth + 322;  // default value

    if (currentStage === 'stage-3') {
      scrollValue = cardWidth + 30;  // adjust for stage 3
    }

    if (limit > index) {
      setCardWidth(prevCardWidth => prevCardWidth - scrollValue); 
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  // Handle clicks on stages for larger screens
  const accordian = (id) => {
    setCurrentStage(id);
    setIndex(1);            
    setCardWidth(0);
  
    const stageData = stages.find(stage => stage.id === id);
    if (stageData && stageData.limit) {
      setLimit(stageData.limit);
    }

    let ele = owlCarousel.current.children;
    switch (id) {
      case "stage-1":
        ele[1].style.display = "grid";
        ele[3].style.display = "none";
        ele[5].style.display = "none";
        break;
      case "stage-2":
        ele[1].style.display = "none";
        ele[3].style.display = "grid";
        ele[5].style.display = "none";
        break;
      case "stage-3":
        ele[1].style.display = "none";
        ele[3].style.display = "none";
        ele[5].style.display = "grid";
        break;
      default:
        console.warn("Unexpected id:", id);
        break;
    }
  }

  // On component mount
  useEffect(() => {
    accordian("stage-1"); 
  }, []);

  return (
    <div className="features">
      <div className="features-head">
        <h2>Our <span>Features</span></h2>
        <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at a dolor voluptatum.</p>
      </div>
      <div className="container">
        <div className="stages">
          {stages.map(stage => (
            <div key={stage.id} className={`stage ${stage.id === currentStage ? "active-stage" : ""}`} onClick={() => accordian(stage.id)}>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>

        <div className="owl-carousel-wrapper" ref={owlCarousel}>
          {stages.map(stage => (
            <React.Fragment key={stage.id}>
              <div key={stage.id} className={`stage none`} onClick={() => accordian(stage.id)}>
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