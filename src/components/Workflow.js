import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaCat } from 'react-icons/fa';
import { TfiWrite, TfiThought } from "react-icons/tfi";
import Header from "./Banner/Header";
import UI from "../components/pic/UI.png";
import ConceptLayout from "../components/pic/conceptlayout.jpg";
import Develop from "../components/pic/develop.png";
import Test from "../components/pic/testing.png";
import Typewriter from './function/Typewriter'; 
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const BoxPage = () => {
  return ( <>
      <Header />

      <TitleContainer>
        <WorkflowTitle><Typewriter text="Workflow" typingSpeed={180} />
        </WorkflowTitle>
      </TitleContainer>
      <PageContainer>
        <BoxWrapper> 
          <Slide direction="left" delay={1} triggerOnce >
          <Box>
            <Icon><TfiThought /></Icon>
            <Title>Concept Layout</Title>
            <Image src={ConceptLayout} alt="Concept Layout" />
            <Description>The foundation and initial structure of the project to ensure clarity and feasibility.</Description>
          </Box> 
          </Slide>
        
          <Slide direction="right" delay={1} triggerOnce >
          <Box>
            <Icon><TfiWrite /></Icon>
            <Title>UI Design</Title>
            <Image src={UI} alt="UI Design" />
            <Description>Crafting visually appealing and user-friendly interfaces for an optimal experience.</Description>
          </Box>
          </Slide>

          <Slide direction="left" delay={1} triggerOnce>
          <Box>
            <Icon><FaReact /></Icon>
            <Title>Frontend/Backend Development</Title>
            <Image src={Develop} alt="Frontend/Backend Development" />
            <Description>Building robust and efficient applications to deliver seamless functionality.</Description>
          </Box>
          </Slide>

          <Slide direction="right" delay={1} triggerOnce>
          <Box>
            <Icon><FaDatabase /></Icon>
            <Title>Testing/Maintenance</Title>
            <Image src={Test} alt="Testing/Maintenance" />
            <Description>Ensuring quality, reliability, and continuous improvement of the system.</Description>
          </Box>
          </Slide>

        </BoxWrapper>
      </PageContainer></>
  );
};

export default BoxPage;

const TitleContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
  filter: drop-shadow(0px 10px 10px #01be9551);
  :hover {
    filter: drop-shadow(0px 10px 10px #01be9570);
  }
`;

const WorkflowTitle = styled.h1`
  font-size: 2.5rem;
  color: #e8e0d3;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem;
  width: 100%;
  max-width: 1200px;
  padding-top: 2rem;
  padding-bottom: 5rem;   

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }
`;

const Box = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  color: #e8e0d3;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 8px;
  filter: drop-shadow(0px 10px 10px #01be9551);
  :hover {
    filter: drop-shadow(0px 10px 10px #01be9570);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Image = styled.img`
  width: 28rem;
  height: 20rem;
  margin: 1rem 0;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 20rem;
    height: 15rem;
  }

  @media (max-width: 480px) {
    width: 18rem;
    height: 12rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
