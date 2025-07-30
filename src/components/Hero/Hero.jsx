import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Orbit from "../Orbit/Orbit.jsx";

function Hero() {
   const locationRef = useRef(null);
  const [locationVisible, setLocationVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setLocationVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (locationRef.current) {
      observer.observe(locationRef.current);
    }

    return () => {
      if (locationRef.current) {
        observer.unobserve(locationRef.current);
      }
    };
  }, []);
  return (
    <>
        <div className="HeroContainer">
                <div className="Hero">
          <div className="orbitContainer">
            <Orbit />
          </div>
          <div className="nameContainer">
            <h1>Kier Roman</h1>
            <h2>Full Stack Web Developer</h2>
            <div
             id="locationContainer"
              ref={locationRef}
              className={`locationContainer ${locationVisible ? "slide-in" : ""}`}>
              <h3 id="location">
                Killeen, Texas
                </h3>
                <span><img id="globe" src="images/gold-globe.png" alt=" Gold Globe" /></span>
            </div>
          </div>
                </div>
        </div>
      {/* Add more sections as needed */}
    </>
  );
}

export default Hero;