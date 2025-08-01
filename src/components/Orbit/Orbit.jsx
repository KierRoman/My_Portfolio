import { useState, useEffect } from "react";
import "./Orbit.css"; 

function Orbit() {
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setRadius(width < 600 ? 45 : 90); // Adjust radius based on screen width
    };

    handleResize(); // Set initial radius
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="text-spinner-wrapper">
          <div className="avatar-circle"></div>
        <svg className="orbit-path" width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="rgba(243, 235, 5, 0.3)"
            strokeWidth="1.5"
            fill="none"
          /> 
        </svg>
        <div className="circle">
          <div className="orbiting-text">
            <div
              className="orbiter pos-0"
              
            >
              <div className="counter-rotator">
                <a href="https://github.com/KierRoman" target="_blank" draggable="false">
                  <img
                    className="logoImg"
                    draggable="false"
                    src="/images/githubLogo.png"
                    alt="GitHub Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="orbiter pos-90"
              
            >
              <div className="counter-rotator"
              >
                <a
                  href="https://linkedin.com/in/kier-roman-245844220"
                  target="_blank" draggable="false"
                >
                  <img
                    className="logoImg"
                    draggable="false"
                    src="/images/linkedinLogo.jpg"
                    alt="LinkedIn Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="orbiter pos-180"
            >
              <div className="counter-rotator">
                <a href="mailto:kierroman@gmail.com" target="_blank" draggable="false">
                  <img
                    className="logoImg"
                    draggable="false"
                    src="/images/mailLogo.png"
                    alt="Mail Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="orbiter pos-270"
            >
              <div className="counter-rotator">
                <a href="/documents/Kier_Roman_Resume.pdf" target="_blank" draggable="false">
                  <img
                    className="logoImg"
                    draggable="false"
                    src="/images/portfolioLogo.png"
                    alt="Portfolio Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orbit;
