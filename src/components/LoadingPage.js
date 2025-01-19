import React from "react";
import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0% {
    color: #01be9570;
    text-shadow: 0 0 7px #01be9570, 0 0 50px #01be9570;
  }
  90% {
    color: #484848;
    text-shadow: none;
  }
  100% {
    color: #484848;
    text-shadow: none;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledH1 = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Span = styled.span`
  margin: 0 5px;
  font-size: 40px;
  color: #484848;
  animation: ${flash} 1.2s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <StyledH1>
        <Span delay={0.1}>L</Span>
        <Span delay={0.2}>0</Span>
        <Span delay={0.3}>A</Span>
        <Span delay={0.4}>D</Span>
        <Span delay={0.5}>I</Span>
        <Span delay={0.6}>N</Span>
        <Span delay={0.7}>G</Span>
        <Span delay={0.8}>.</Span>
        <Span delay={0.9}>.</Span>
        <Span delay={1.0}>.</Span>
      </StyledH1>
    </LoadingContainer>
  );
};

export default LoadingPage;
