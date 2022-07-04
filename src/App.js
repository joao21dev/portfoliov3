import Navbar from "./Navbar";
import styled from "styled-components";
import "./App.css";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";

function App() {
  return (
    <Container>
      <Navbar></Navbar>
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </Container>
  );
}

export const Container = styled.div`
  background-color: #f9f6ee;
  height: 100%;
`;

export default App;
