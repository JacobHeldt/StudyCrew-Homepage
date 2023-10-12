import React, { useRef ,useState,useEffect} from 'react'
import "./Features.css"
import {BsArrowRightShort,BsArrowLeftShort} from "react-icons/bs"

function Features() {
  const owlCarousel = useRef()
  const card = useRef()
  const [cardWidth,setCardWidth]=useState(0)
  let [index,setindex] = useState(1)
  const [limit,setLimit]=useState(4)
  const scrollLeft=()=>{
    if (index>1){
      setCardWidth(card.current.offsetWidth+cardWidth+10)
      // console.log(card.current)
      index -= 1
    }
    setindex(index)
  }
  const scrollRight=()=>{
    if (limit >index){
      setCardWidth(cardWidth-card.current.offsetWidth-10)
      // console.log(card.current)

      index +=1
    }
    setindex(index)
  }
  const accordian =(id)=>{
      console.log(owlCarousel.current.children,id)
      let ele = owlCarousel.current.children
      switch(id){
        case "stage-1":
              ele[1].style.display ="grid"
              ele[3].style.display ="none"
              ele[5].style.display ="none"
              break
        case "stage-2":
              ele[1].style.display ="none"
              ele[3].style.display ="grid"
              ele[5].style.display ="none"
              break
        case "stage-3":
              ele[1].style.display ="none"
              ele[3].style.display ="none"
              ele[5].style.display ="grid"
              break        
      }
  }
  const mobileAccordian=(id)=>{
    let ele = owlCarousel.current.children
      switch(id){
        case "stage-1": 
              ele[1].style.display = ele[1].style.display === "grid"?"none":"grid"
              break
        case "stage-2":
              ele[3].style.display = ele[3].style.display === "grid"?"none":"grid"
              break
        case "stage-3":
              ele[5].style.display = ele[5].style.display === "grid"?"none":"grid"
              break        
      }
  }
  const reSetValue =()=>{

    if (window.innerWidth < 521){
        setLimit(6)  
    }else if(window.innerWidth < 861){
      setLimit(5)
    }else{
      setLimit(4)
    }
    setCardWidth(0)
    setindex(1)
  }
  useEffect(()=>{
    window.addEventListener("resize",reSetValue)
    return()=>{
      window.removeEventListener("resize",reSetValue)
      
    }
  },[])

  return (
    <div className="features">
      <div className="features-head">
        <h1 className="title">our <span>features</span></h1>
        <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at a dolor voluptatum.</p>
      </div>
      <div className="container">
      <div className="stages">
        <div className="stage" onClick={()=>accordian("stage-1")}>
          <h3>Stage 1</h3>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="stage" onClick={()=>accordian("stage-2")} >
          <h3>Stage 1</h3>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="stage" onClick={()=>accordian("stage-3")} >
          <h3>Stage 1</h3>
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
    
      <div className="owl-carousel-wrapper" ref={owlCarousel}>
      <div className="none stage" onClick={()=>mobileAccordian("stage-1")}>
        <h1>Stage 1</h1>
      </div>
      <div className="owl-carousel ">
           <div class="cards" style={{translate:`${cardWidth}px`}} >

             <div className="card" ref={card} >
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group6</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>


            </div>        
             <div className="arrow-icons">
              <BsArrowLeftShort onClick={scrollLeft} size={50} className="arrow-left"/>
              <BsArrowRightShort size={50} onClick={scrollRight} className="arrow-right"/>     
        </div>
      </div>
      <div className="none stage" onClick={()=>mobileAccordian("stage-2")}>
        <h1>Stage 1</h1>
      </div>
      <div className="owl-carousel none" >
           <div class="cards" style={{translate:`${cardWidth}px`}} >

           <div className="card" >
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group2</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group6</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
            </div>        
             <div className="arrow-icons">
              <BsArrowLeftShort onClick={scrollLeft} size={50} className="arrow-left"/>
              <BsArrowRightShort size={50} onClick={scrollRight} className="arrow-right"/>     
        </div>
      </div>
      <div className="none stage" onClick={()=>mobileAccordian("stage-3")}>
        <h1>Stage 1</h1>
      </div>
      <div className="owl-carousel none ">
           <div class="cards" style={{translate:`${cardWidth}px`}} >

           <div className="card" >
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group3</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group6</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
             <div className="card">
              <img className="card-image" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg" alt="" />
             <h3 className="card-title">Study Group</h3>
             <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis fuga nulla quasi odit nemo quia alias aliquam voluptate? Totam magni omnis facere praesentium mollitia expedita officiis aspernatur, in illum.
             </p>
             </div>
            </div>        
             <div className="arrow-icons">
              <BsArrowLeftShort onClick={scrollLeft} size={50} className="arrow-left"/>
              <BsArrowRightShort size={50} onClick={scrollRight} className="arrow-right"/>     
        </div>
      </div>
     
      </div>
      </div>
    </div>
  )
}

export default Features
