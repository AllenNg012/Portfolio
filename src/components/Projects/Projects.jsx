import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

const Projects = () => {
    const scrollUp = () => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <Container id='project'>
        <Zoom>
            <h1>Recent <span className="ProjectColour">Projects</span></h1>
            <p>
            Take a moment to peruse a few of the projects I've had the pleasure of working on. They're available for your reference whenever you're ready</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
        <a href="/ProjectList">Detail</a>
        <Zoom>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Zoom>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    a{
                margin-left: 0.4rem;
                color: #e1d6c2;
                :hover{
              color: #c6bba8b2;
            }
            }
    
`
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be95cf;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;  
  
  :hover {
    background-color: #01be9570;
  }
`;
const Slide = styled.div``