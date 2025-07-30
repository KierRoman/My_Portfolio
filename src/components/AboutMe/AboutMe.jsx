import React, {useEffect, useRef, useState} from 'react';
import './AboutMe.css';

let AboutMe = () => {
    const locationRef1 = useRef(null);
    const locationRef2 = useRef(null);
    const [locationVisible1, setLocationVisible1] = useState(false);
    const [locationVisible2, setLocationVisible2] = useState(false);

    useEffect(() => {
    const observer1 = new IntersectionObserver(
        ([entry]) => {
            setLocationVisible1(entry.isIntersecting);
        },
        { threshold: 0 }
    );

    const observer2 = new IntersectionObserver(
        ([entry]) => setLocationVisible2(entry.isIntersecting),
        { threshold: 0.1 }
    );

    if (locationRef1.current) observer1.observe(locationRef1.current);
    if (locationRef2.current) observer2.observe(locationRef2.current);

    return () => {
        if (locationRef1.current) observer1.unobserve(locationRef1.current);
        if (locationRef2.current) observer2.unobserve(locationRef2.current);
    };
    }, []);
  return (
    <div className='about-me'>
      <h1>About Me</h1>
      <div className='about-me-content'>
          <div 
                ref={locationRef1}
                className={`firstlocationContainer ${locationVisible1 ? "slide-in" : ""}`}>           
              <div id="about-me-text">
                <strong>
                  Hello! I'm a passionate web developer with a desire to build, sustain, and maintain web applications.
                  I have a strong foundation in JavaScript, React, Express, and Node.js, and experience with Python, MongoDB and PostgreSQL.
                </strong>
              </div>
          </div>
          <div 
                ref={locationRef2}
                className={`secondlocationContainer ${locationVisible2 ? "slide-in" : ""}`}
              >
              <div id="about-me-text2">
                <strong>
                  In my free time, I like to explore new programming languages and
                  stay updated with the latest trends in web development.
                </strong>
              </div>
          </div>
              </div>
      </div>
  );
}

export default AboutMe;