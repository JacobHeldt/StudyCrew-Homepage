import React, { useRef, useState, useEffect, useCallback } from 'react';
import "./Features.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

function Features() {
  const owlCarousel = useRef();
  const card = useRef();
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(1);
  const [limit, setLimit] = useState(4);

  // Function to scroll left
  const scrollLeft = () => {
    if (index > 1) {
      setCardWidth(prevCardWidth => card.current.offsetWidth + prevCardWidth + 22);
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (limit > index) {
      setCardWidth(prevCardWidth => prevCardWidth - card.current.offsetWidth - 22);
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
        <h1 className="title">our <span>features</span></h1>
        <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at a dolor voluptatum.</p>
      </div>
      <div className="container">
        {/* Stages for larger screens */}
        <div className="stages">
          {/* Stage 1 */}
          <div className="stage" onClick={() => accordian("stage-1")}>
            <h3>Stage 1</h3>
            <p>Lorem ipsum dolor</p>
          </div>

          {/* Stage 2 */}
          <div className="stage" onClick={() => accordian("stage-2")} >
            <h3>Stage 1</h3>
            <p>Lorem ipsum dolor</p>
          </div>

          {/* Stage 3 */}
          <div className="stage" onClick={() => accordian("stage-3")} >
            <h3>Stage 1</h3>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>

        {/* Owl carousel wrapper */}
        <div className="owl-carousel-wrapper" ref={owlCarousel}>
          {/* Stage 1 content for mobile */}
          <div className="none stage" onClick={() => mobileAccordian("stage-1")}>
            <h1>Stage 1</h1>
          </div>

          {/* Owl carousel */}
          <div className="owl-carousel">
            {/* Cards */}
            <div class="cards" style={{ translate: `${cardWidth}px` }} >
              {/* Individual card */}
              <div className="card" ref={card}>
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              {/* ... (additional cards) */}
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
             </div>
              {/* Arrow icons for carousel */}
              <div className="arrow-icons">
                <BsArrowLeftShort onClick={scrollLeft} size={50} className="arrow-left" />
                <BsArrowRightShort size={50} onClick={scrollRight} className="arrow-right" />
           
            </div>
          </div>

          {/* Stage 2 content for mobile */}
          <div className="none stage" onClick={() => mobileAccordian("stage-2")}>
            <h1>Stage 2</h1>
          </div>

          {/* Owl carousel */}
          <div className="owl-carousel none">
            {/* Cards */}
            <div class="cards" style={{ translate: `${cardWidth}px` }} >
              {/* Individual card */}
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              {/* ... (additional cards) */}
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              </div>
              {/* Arrow icons for carousel */}
              <div className="arrow-icons">
                <BsArrowLeftShort onClick={scrollLeft} size={50} className="arrow-left" />
                <BsArrowRightShort size={50} onClick={scrollRight} className="arrow-right" />
              
            </div>
          </div>
           {/* Stage 3 content for mobile */}
           <div className="none stage" onClick={() => mobileAccordian("stage-3")}>
            <h1>Stage 2</h1>
          </div>

          {/* Owl carousel */}
          <div className="owl-carousel none">
            {/* Cards */}
            <div class="cards" style={{ translate: `${cardWidth}px` }} >
              {/* Individual card */}
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              {/* ... (additional cards) */}
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              <div className="card" >
                <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
                <h3 className="card-title">Study Group</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
                </p>
              </div>
              </div>
              {/* Arrow icons for carousel */}
              <div className="arrow-icons">
                <BsArrowLeftShort onClick={scrollLeft} size={50} className="arrow-left" />
                <BsArrowRightShort size={50} onClick={scrollRight} className="arrow-right" />
           
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



export default Features;
