import React, { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import  P1 from "../pic/p1/4.gif";
import  P2 from "../pic/p2/1.gif";
import  P3 from "../pic/p3/tbc.gif";
import  P4 from "../pic/p4/1.gif";
import  P5 from "../pic/p5/7.gif";
import  H3 from "../pic/h3.gif";
import  ff0 from "../pic/ff0.gif";
import  Intern from "../pic/intern.gif";
import Camponlinestore from "../pic/Camponlinestore.gif";
import  Exchange from "../pic/exchange.gif";
import  Cryptocurrency from "../pic/Cryptocurrency.gif";
import  Painting from "../pic/painting.gif";
import  Practice from "../pic/pratice.gif";


// Data array to export
export const data = [
  {
    img : ff0,
    disc : "Gaming UI Web",
    link : "https://ff0testing2.vercel.app/"
  },
    {
        img : P1,
        disc : "CRM - Wordpress project",
        link : "/Project1"
    },
    {
        img : H3,
        disc : "Website - Bar",
        link : "https://new-project-h3restaurant.vercel.app/"
    },
    {
        img : Intern,
        disc : "Website - Sports Club",
        link : "https://athletics-coaches-page-5ufc.vercel.app/"
    },
    {
        img : Camponlinestore,
        disc : "Online store - React",
        link : "https://online-store-testing-gy24.vercel.app/"
    },
    {
        img : P4,
        disc : "CRM - Wix",
        link : "/Project4"
    },
    {
        img : P2,
        disc : "Online store - Angular",
        link : "/Project2"
    },
    {
        img : Exchange,
        disc : "Currency Converter",
        link : "https://currency-ebon.vercel.app/"
    },
    {
        img : Cryptocurrency,
        disc : "Cryptocurrency Price Tracking",
        link : "https://crypto-prices-one.vercel.app/"
    },
    {
        img : Painting,
        disc : "Painting Application",
        link : "https://paint-app-d52l.vercel.app/"
     },
     {
        img : Practice,
        disc : "Self Practice",
        link : "https://coding-practices-three.vercel.app/"
    },
    {
        img : P5,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project5"
    },
    {
        img : P3,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project3"
    },
    {
        img : P3,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project3"
    },
    {
        img : P3,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project3"
    },
    {
        img : P3,
        disc : "We prioritize client-centricity, crafting tailored websites for a personalized online presence.",
        link : "/Project3"
    }
];

// Slider settings...
// (No changes needed in the slider component)
var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows : false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode : false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode : false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode : false
      }
    }
  ]
};

const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
      <Project item={item} key={i} />
  ));
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button 
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack/></button>
        <button 
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
;`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }
 

  .back{
    left: -1rem;
  }
`