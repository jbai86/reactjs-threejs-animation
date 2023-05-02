import React from 'react'
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { TestThree } from './TestThree';
import Webdesign from './Webdesign';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 800px;
  display: flex;
  justify-content:space-between;
`;

const Left = styled.div`
  flex: 2;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;


const Desc = styled.p`
font-size: 24px;
color: lightGray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width:100px;
  padding:10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px)
    }
  }
`;


export const Hero = () => {
  return (
    
    <Section>
      <Webdesign></Webdesign>
      <Navbar></Navbar>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          
          
          <WhatWeDo>
            <Line src="./img/line.png"></Line>
            <Subtitle> What we do</Subtitle>
          </WhatWeDo>
          <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./img/moon.png"></Img>
        </Right>
      </Container>
    </Section>
  )
}
