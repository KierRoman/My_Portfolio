import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Footer from "./components/Footer/Footer.jsx"

function App() {
  
  return (
    <>
    <div className='background-image'></div>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
