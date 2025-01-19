import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Slide, Zoom, Fade,Bounce,Flip,Rotate,Roll,JackInTheBox,Hinge } from "react-awesome-reveal";

const ProjectView = () => {
  const location = useLocation(); // Access the passed project data
  const { projectData } = location.state; // Get the projectData from the state
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Container>
      <HeroSection>
        <BackArrow onClick={handleBackClick}>&#8592;</BackArrow>
        <Description>
          <Fade   duration={4000} direction="up">
          <h1>{projectData.disc}</h1>
          </Fade>
          <Fade   duration={1000}>
          <ButtonWrapper >
            <Button href="https://google.com">View</Button>
          </ButtonWrapper>
          </Fade>
        </Description>
        <ImageWrapper>
          <Image src={projectData.img} alt="Project Image" />
          <GradientOverlayLeft />
          <GradientOverlayBottom />
        </ImageWrapper>
      </HeroSection>
    </Container>
  );
};

export default ProjectView;

const Container = styled.div`
  background-color: #000000;
  color: #e8e0d3;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
;`

const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
;`

const BackArrow = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2.5rem;
  cursor: pointer;
  color: #e8e0d3;
  z-index: 20;  
  :hover {
    color: #aba49a;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
;`

const Description = styled.div`
  position: absolute;
  top: 55%;
  left: 5%;
  color: #e8e0d3;
  font-family: 'Arial', sans-serif;
  z-index: 10;
  width: 35%;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    bottom: auto;

    h1 {
      font-size: 1rem;
    }
  }
;`

const ButtonWrapper = styled.div  `
    padding: 3rem 0;
  .a{text-decoration: none;  
  }
  @media (max-width: 768px) {
    padding: 0rem 0;
}`

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.8rem;
  border-radius: 20%;
  cursor: pointer;
  background-color: #12e0b3c7;
  border: none;
  color: #e8e0d3;
  font-weight: 500;
  filter: drop-shadow(0px 10px 10px #01be9551);
  
  :hover {
    filter: drop-shadow(0px 10px 10px #01be9570);
  }
;`


const ImageWrapper = styled.div`
  position: absolute;
  right: 0%; 
  width: 80%; 
  height: auto;
  display: flex;
  justify-content: flex-end; 
;`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  pointer-events: none;  /* This disables interactions with the image (including right-click) */
;`

const GradientOverlayLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
  pointer-events: none;
;`

const GradientOverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  pointer-events: none;
;`