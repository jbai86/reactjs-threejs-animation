import './App.css';
import { Hero } from './components/Hero';
import { Who } from './components/Who';
import { Contact } from './components/Contact';
import { Works } from './components/Works';
import styled from 'styled-components';
import Webdesign from './components/Webdesign';



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
