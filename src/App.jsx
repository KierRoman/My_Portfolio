import { useEffect, useRef, useState } from "react";
import "./App.css";
import Orbit from "./components/Orbit/Orbit.jsx";
import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";

function App() {
  
  return (
    <>
    <div className='background-image'></div>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
