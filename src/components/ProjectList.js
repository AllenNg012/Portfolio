import React from 'react';
import styled from 'styled-components';
import { data } from './Projects/Slider'; // Import the data from Slider.js file
import Typewriter from './function/Typewriter'; 
import Header from "./Banner/Header";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Zoom,Fade } from 'react-awesome-reveal';

const ProjectList = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle click on project box
  const handleProjectClick = (projectData) => {
    navigate('/projectview', { state: { projectData } }); // Pass the project data to the ProjectView page
  };

  return (
    <>
      <Header /> 
      <Container> 
        <TitleContainer>
          <Title>
            <Typewriter text="Project List" typingSpeed={180} />
          </Title>
        </TitleContainer>
        
       <Grid>
          {data.map((item, index) => (
            <ProjectBox 
              key={index} 
              onClick={() => handleProjectClick(item)} // Attach the click handler
            >
              <Image src={item.img} alt={`Project ${index + 1}`} />
              <Description>
                <p>{item.disc}</p>
              </Description>
            </ProjectBox>
          ))}
        </Grid> 
      </Container>
    </>
  );
};

export default ProjectList;
const TitleContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
  filter: drop-shadow(0px 10px 10px #01be9551);
  :hover {
    filter: drop-shadow(0px 10px 10px #01be9570);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #e8e0d3;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;const Container = styled.div`
  padding: 0 3.2rem;
  text-align: center;
  @media (max-width: 640px) {
      width: 100%;
      padding: auto;

    }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 80px;
  margin: 4.3rem 50px;
  @media (max-width: 640px) {
    margin: 4rem auto;
    }
`;

const ProjectBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const Description = styled.div`
  padding: 15px;
  h2 {
    margin-top: 0;
    font-size: 1.2rem;
    color: #333;
  }
  p {
    font-size: 1rem;
    color: #666;
  }
`;
