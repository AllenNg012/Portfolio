/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade ,Bounce,Flip,Rotate,Roll,JackInTheBox,Hinge} from "react-awesome-reveal";
import logo2 from "../components/pic/chnlogo.png";
import cat from "../components/pic/3018884-middle.png";
import additionalImage from "../components/pic/pie-chart.png"; 
import Header from "./Banner/Header";

const Footer = () => {
  return (
    <>
      <Header />
      <Container id="footer">
        <Profile>
          <div className="portfolio">
            <Slide direction="left" delay={1}>
              <h1>Contact details</h1>
            </Slide>
          </div>

          <div className="address">
            <Slide direction="left">
              <h1>Address:</h1>
            </Slide>
            <Slide direction="left">
              <p>Scarborough, Toronto, Ontario(ON), Canada (relocatable)</p>
            </Slide>
          </div>
          <div className="links">
            <Slide direction="left">
              <h1>Contact me directly:</h1>
            </Slide>
            <div>
              <span>
                <FiPhoneCall />
              </span>
              <Slide direction="left">
                <a href="tel:+4378824656">+1 437 882 4656</a>
              </Slide>
            </div>
            <div>
              <Slide direction="left">
                <span>
                  <HiOutlineMailOpen />
                </span>
              </Slide>
              <Slide>
                <a href="mailto:nch19940123ca@gmail.com">nch19940123ca@gmail.com</a>
              </Slide>
            </div>
          </div>
          <div className="profiles">
            <Slide direction="left">
              <h1>Check my profiles</h1>
            </Slide>
            <div className="icons">
              <Zoom>
                <span>
                  <a href="https://github.com/ChungHinNg">
                    <AiFillGithub />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="https://linkedin.com/in/chung-hin-ng-5955a1268">
                    <AiFillLinkedin />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="/">
                    <BsFacebook />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="/">
                    <BsTwitter />
                  </a>
                </span>
              </Zoom>
              <span className="w">
              </span>

              <Hinge duration={6000} triggerOnce>
                <img src={cat} style={{ width: '60px', height: 'auto' }} alt="Cat" />
              </Hinge>
            </div>
          </div>
          <br></br>
          <div style={{ fontSize: '8px' }}></div>
        </Profile>
        <Slide direction="right">
          <Form>
            <img src={logo2} alt="logo"></img>
            <img src={additionalImage} alt="additional" ></img>
          </Form>
        </Slide>

      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
const Profile = styled.div`
    margin-top: 4rem;
  flex: 1;
  .portfolio {
    color: #00ffc8cf;
  } 
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
      color: #01be95cf;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #01be95cf;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    
    h1 {
      font-size: 1.2rem;
      color: #01be95cf;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span.w {
      background-color: #191923;
      :hover {
          background-color: #191923;
        }
    }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #01be95cf;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: #01be9570;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;

const Form = styled.div`
  flex: 0.8;
  flex-direction: column;
  display: flex;
  img {
    width: 20rem;
    height: 18rem;
    margin-top: 4rem;
    filter: drop-shadow(0px 10px 10px #01be9551);

    &:nth-child(2) {
      width: 20rem;
      height: 20rem;
      margin-top: 5rem;
    }
  }
`;
