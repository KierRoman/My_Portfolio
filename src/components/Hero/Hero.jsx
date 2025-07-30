import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Orbit from "../Orbit/Orbit.jsx";

function Hero() {
  const locationRef = useRef(null);
  const [locationVisible, setLocationVisible] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
          );
          const data = await res.json();

          const utcSeconds = data.dt + data.timezone;
          const localTime = new Date(utcSeconds * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          setWeather({
            city: data.name,
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
            time: localTime,
          });
        } catch (err) {
          console.error("Failed to fetch weather:", err);
          setError("Weather unavailable.");
        }
      },
      () => setError("Location permission denied.")
    );
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
              className={`locationContainer ${
                locationVisible ? "slide-in" : ""
              }`}
            >
              <div className="wx">
                <h3 id="location">{weather?.city || "Killeen, Texas"}</h3>
                            {weather && (
                <div className="weatherText">
                  <div id='condition'>🌤 {weather.condition}, {weather.temp}°F </div>
                  <div id='time'>
                    🕒 {weather.time}
                  </div>
                </div>
                            )}
              </div>
              <span>
                <img id="globe" src="images/gold-globe.png" alt=" Gold Globe" />
              </span>
            </div>


            {error && <p className="weatherText error">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
