import React from 'react';
import { Link } from 'react-router-dom';
import Projects from "./Projects/Projects";
import styled from "styled-components";
import  logo2 from "./pic/chnlogo.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import { Zoom } from 'react-awesome-reveal';
import { Slide } from "react-awesome-reveal";
import Typewriter from './function/Typewriter'; 
import  a1 from "./pic/a1.gif";
import  P3 from "./pic/p3/tbc.gif";


const Project = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (

        <Container1>     
        <Container2>    
        <Logo>
        <Link to="/"> <img src={logo2} alt="axs"></img></Link>
            <h4>&larr;&nbsp;Home</h4>
        </Logo>
        </Container2> 
{/* ------------------------------------------------------------------------------------------ */}


<Container5>
        <tr>
          <td rowspan="2">
              <Textss>
                <br />
                <br />
                <h2><Typewriter text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project Title" typingSpeed={200} /></h2>
                <br />
                <br />
                <br />
                <br />
                <p><Zoom>Click here to view the work</Zoom>
                  <br />
                       {/* -----------------------           <Zoom><Button>
        <StyledLink href='https://kaixa94.wixsite.com/my-site-4' target='_blank' rel='noopener noreferrer'>
          View Project
        </StyledLink>
      </Button></Zoom>  
    </a>------------------------------------------------------------------- */}
                  <br /> <Zoom>Or scroll to see the processing flow</Zoom>
                </p>
              </Textss>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            <Slide direction="right">
              <Profile>
              <img src={P3} alt="Animated GIF" style={{ width: '500px', height: 'auto' }} />
              </Profile>
            </Slide>
          </td>
        </tr>

      </Container5>
      <Zoom><Arrow><img src={a1} alt="Animated GIF"></img></Arrow></Zoom>



{/* ------------------------------------------------------------------------------------------ */}

        <LightColor>
        <br></br>
          <Tittle><span>Processing Flow</span></Tittle>
          <Container3 >
          <tr>
<td rowspan="2"><Slide direction="left">
        <Texts>
        <br></br><br></br>
          <h3>Task</h3>
          <br></br><br></br><br></br><br></br><br></br>
          <p>
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          </p>

          
        </Texts>
      </Slide></td> </tr>
  <tr><td> </td>
      <td><Slide direction="right">
        <Profile>
        <img src={P3} alt="Animated GIF" style={{ width: '500px', height: 'auto' }} />
        </Profile>
      </Slide> </td></tr>

    </Container3>
  </LightColor>   

{/* ------------------------------------------------------------------------------------------ */}

<Container3>

          <tr>
<td></td> <td rowspan="2"><Slide direction="right">
        <Texts>
        <br></br><br></br>
          <h3>Planning</h3>
          <br></br><br></br><br></br><br></br><br></br>
          <p>
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          </p>

          
        </Texts>
      </Slide></td></tr>
  <tr><td><Slide direction="left">
        <Profile>
        <img src={P3} alt="Animated GIF" style={{ width: '500px', height: 'auto' }} />
        </Profile>
      </Slide> </td>
      <td> </td></tr>

      </Container3>



{/* ------------------------------------------------------------------------------------------ */}

  <LightColor>
<Container3 >
          <tr>
<td rowspan="2"><Slide direction="left">
        <Texts>
        <br></br><br></br>
          <h3>Processing</h3>
          <br></br><br></br><br></br><br></br><br></br>
          <p>
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          Offer professional consultation and web design services, covering everything from conceptualization to execution. My commitment is to deliver the most optimal and cost-effective creative solutions for clients, providing a one-stop service.
          </p>

          
        </Texts>
      </Slide></td> </tr>
  <tr><td> </td>
      <td><Slide direction="right">
        <Profile>
        <img src={P3} alt="Animated GIF" style={{ width: '500px', height: 'auto' }} />
        </Profile>
      </Slide> </td></tr>

    </Container3>
  </LightColor>   

{/* ------------------------------------------------------------------------------------------ */}

<Container4 >
<Zoom>
            <h1>Result</h1>
            <p>
            Let's see the final view </p>   
              <br></br><br></br>
        </Zoom>
        <table>

        <tr><td><Slide direction="left">
        <Zoom>              <img src={P3} alt="Animated GIF" style={{ width: '500px', height: 'auto' }} />
</Zoom>
         </Slide></td>
         <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

      <td>
      <Slide direction="right"><Zoom>              <img src={P3} alt="Animated GIF" style={{ width: '500px', height: 'auto' }} />
</Zoom>
      </Slide>
       </td></tr>
       </table>
                 {/* -----------------------               <SS><Button>
        <StyledLink href='https://kaixa94.wixsite.com/my-site-4' target='_blank' rel='noopener noreferrer'>
          View Project
        </StyledLink>
      </Button></SS>
    </a>------------------------------------------------------------------- */}
  
    </Container4>





{/* ------------------------------------------------------------------------------------------ */}


        <LightColor>
    <Projects />
  </LightColor>   


{/* ------------------------------------------------------------------------------------------ */}


  <br></br>
  <Zoom><StyledImage >
      <img src={logo2} alt=""></img>
      </StyledImage></Zoom>
      <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
        <br></br>
</Container1> 

  );
};

export default Project;
const Container1 = styled.div``;
const Container2 = styled.div``;
const Container3 = styled.div` width: 80%;
max-width: 1280px;
margin: 0 auto;
padding: 3rem 0;
text-align: center;
position: relative;
@media(max-width: 840px){
    width: 90%;
}`;

const Container4 = styled.div`width: 80%;
max-width: 1280px;
margin: 0 auto;
padding: 3rem 0;
text-align: center;
position: relative;
@media(max-width: 840px){
    width: 90%;
}
table {
  margin: 0 auto; /* Center the table horizontally */
}

img {
  max-width: 100%; /* Optional: Ensure the image doesn't exceed its container's width */
  display: block; /* Optional: Remove default inline-block spacing */
  width: 30rem;
  height: 30rem;
  filter: drop-shadow(0px 10px 10px #01be9551);
}

`;

const Container5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55vh; /* Adjust as needed */
  
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

const StyledImage = styled.div`
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 23rem;
      height: 20rem;
      filter: drop-shadow(0px 10px 10px #01be9551);
      
  }
  
`;

const ArrowUp = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
  width: 2rem;
  height: 2rem;
  background-color: #a3782a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;

  :hover {
    background-color: orange;
  }

  opacity: 0.5;
  transition: opacity 1s ease-in-out;

  &:hover {
    opacity: 1;
  }


`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;

    img {
      width: 10rem;
      filter: drop-shadow(0px 10px 10px #01be9570);
      cursor: pointer; /* Add this line */
      transition: transform 0.3s ease; /* Add this line for smooth transition */
  
      @media (max-width: 790px) {
        width: 20rem;
      }
  

    h3{
        font-weight: 600;
        font-size: 1.2rem;
    }
    
    :hover {
      transform: rotate(360deg);
    }}
`;

const Texts = styled.div`
  flex: 1;
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

`;

const Tittle = styled.div`
span{    
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

`;



const Profile = styled.div`


    width: 25rem;
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
    filter: drop-shadow(0px 10px 10px #c6bba8);
  }
`;

const SS = styled.div`
  text-align: center; /* Center the button */
  margin-top: 3rem;
`;

const Button = styled.button`
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  background-color: #c6bba8;
  border: none;
  color: #fff;
  font-weight: 500;
   :hover {
    background-color: orange;
  }

  opacity: 0.5;
  transition: opacity 1s ease-in-out;

  &:hover {
    opacity: 1;
  }


`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;


const Textss = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Arrow = styled.div`display: flex;
justify-content: center;
align-items: center;

& > img {
  max-width: 10%; /* Adjust the maximum width as needed */
  height: auto; /* Maintain the aspect ratio */
}`;
