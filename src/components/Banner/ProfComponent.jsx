import React from "react";
import styled from "styled-components";
import {AiFillGithub } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide,Fade } from "react-awesome-reveal";
import pic1 from "../pic/Snapinst.app_469277761_8994742370582567_318393743827386623_n_108023.jpg"
import Typewriter from '../function/Typewriter'; 

const ProfComponent = () => {
  return (
    <Container id="home">
        <Texts>
        <Fade   duration={4000} direction="up">
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green"><Typewriter text="Chung Hin Ng(Allen)" typingSpeed={100} /></h1>
          <h3>Web developer</h3>
          <p>
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          </p>
          {/* -----------------------          <a href={require("../pic/CV.docx")} download="Resume">
          <button>My Resume</button>
    </a>------------------------------------------------------------------- */}

        </Fade> 
        <Fade   duration={5000} >
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/ChungHinNg">
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="https://linkedin.com/in/chung-hin-ng-5955a1268">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
          <RecentProjects>
          <p>Recent Projects</p>
          <a href="https://google.com">
          <button>View</button>
          </a>
          </RecentProjects>        </Fade> 

        </Texts>
      <Slide direction="right">
        <Profile>
        <img src={pic1} alt="axs"></img>
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }


    /* -----------------------         
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #c6bba8;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }  
    ------------------------------------------------------------------- */
`;
const RecentProjects = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  a:link { text-decoration: none; }

  button {
    
    display: flex;
    align-items: center;
    padding: 0.7rem 2rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: #12e0b3c7;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
    
  }  

`

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be95cf;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  
    width: 25rem;
    img{  width: 25rem;
    border-radius:50%}
    filter: drop-shadow(0px 5px 5px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
  :hover {
    filter: drop-shadow(0px 10px 10px #01be95cf);
  }
`;


