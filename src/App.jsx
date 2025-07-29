import { useEffect, useRef, useState } from "react";
import "./App.css";
import Orbit from "./components/Orbit/Orbit.jsx";
import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <Projects />
    </>
  );
}

export default App;
