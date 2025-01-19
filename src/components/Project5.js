import React from 'react';
import { Link } from 'react-router-dom';
import Projects from "./Projects/Projects";
import styled from "styled-components";
import  logo2 from "./pic/chnlogo.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import { Zoom } from 'react-awesome-reveal';
import { Slide } from "react-awesome-reveal";
import  P1 from "./pic/p5/1.gif";
import  P2 from "./pic/p5/2.png";
import  P3 from "./pic/p5/3.gif";
import  P4 from "./pic/p5/4.gif";
import  P5 from "./pic/p5/5.gif";
import  P6 from "./pic/p5/6.png";
import Typewriter from './function/Typewriter'; 
import  a1 from "./pic/a1.gif";



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
                <h2><Typewriter text="&nbsp;&nbsp;&nbsp;Portfolio Page" typingSpeed={200} /></h2>
                <br />
                <br />
                <br />
                <br />
                <p><Zoom>Click here to view the work</Zoom>
                  <br />
                  <Zoom><Button>
                  <Link to="/">
          View Project</Link>


      </Button></Zoom>
                  <br /> <Zoom>Or scroll to see the processing flow&nbsp;&nbsp;&nbsp;&nbsp;</Zoom>
                </p>
              </Textss>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            <Slide direction="right">
              <Profile2>
              <img src={P1} alt="Animated GIF" style={{ width: '500px', height: 'auto' }} />
              </Profile2>
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
          Build a dynamic portfolio webpage to market my skills and experience. Feature an engaging homepage introducing myself, a dedicated resume section showcasing qualifications, and a portfolio displaying websites I've developed. Highlight each project's details. Include a skills section with visual representations. Implement JavaScript animations for an interactive and captivating user experience. Ensure responsive design for optimal viewing on various devices. Provide clear contact information. This portfolio serves as a compelling resume, demonstrating my expertise and creativity to potential employers or collaborators.
</p>
          
        </Texts>
      </Slide></td> </tr>
  <tr><td> </td>
      <td><Slide direction="right">
        <Profile>
        <img src={P2}  style={{ width: '400px', height: 'auto' }} alt=""/>
        </Profile>
      </Slide> </td></tr>

    </Container3>
  </LightColor>   

{/* ------------------------------------------------------------------------------------------ */}
         <Container3 >

        <br></br>
          <tr>
<td></td> <td rowspan="2"><Slide direction="right">
        <Texts>
        <br></br><br></br>
          <h3>Planning</h3>
          <br></br><br></br><br></br><br></br><br></br>
          <p>
          Plan my portfolio website using <b><i>Figma</i></b> for comprehensive design. Develop wireframes for all pages, including an engaging homepage, a structured resume section, a visually appealing portfolio display, and a skills section with graphical representations. Design a clear and accessible contact section. Incorporate <b><i>JavaScript</i></b> animations to enhance interactivity, aligning with the overall aesthetic.
          </p>

          
        </Texts>
      </Slide></td></tr>
  <tr><td><Slide direction="left">
        <Profile>
        <img src={P3}  style={{ width: '400px', height: 'auto' }}alt="" />
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
          Build a dynamic <b><i>React.js</i></b> portfolio using <b><i>HTML, CSS, and JavaScript</i></b>. Organize sections like homepage, resume, portfolio, skills, and contact into <b><i>React</i></b> components for seamless navigation. Enhance the aesthetic with <b><i>Figma</i></b>-designed layouts and <b><i>JavaScript</i></b> animations. Link previous projects with explanations, showcasing the processing flow. Ensure responsive design and conduct thorough testing. Deploy the finalized portfolio on a hosting platform for public access, effectively presenting my skills and expertise.
         </p>

          
        </Texts>
      </Slide></td> </tr>
  <tr><td> </td>
      <td><Slide direction="right">
        <Profile>
        <img src={P4}  style={{ width: '500px', height: 'auto' }} alt=""/>
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
        <Zoom><img src={P5} alt="axs" className='axs' style={{ width: '470px', height: '420.5px' }}></img></Zoom>
         </Slide></td>
         <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>

      <Slide direction="right"><Zoom><img src={P6} alt="axs" className="axs"style={{ width: '460px', height: '420.5px' }}></img></Zoom>
      </Slide>
       </td></tr>
       </table>
        <SS><Button>
        <Link to="/">
          View Project</Link>
      </Button></SS>
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
}p b {
  font-size: 1.1em; /* Adjust the size as needed */
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
h1{  height: 10vh; /* Adjust as needed */
}
 .axs{ 
  :hover {
    filter: drop-shadow(0px 10px 10px #c6bba8);    transform: translateY(-10px);

  }}
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
    filter: drop-shadow(0px 5px 5px #c6bba8);
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



const Profile2 = styled.div`


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
