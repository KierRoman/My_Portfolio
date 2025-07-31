import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Orbit from "../Orbit/Orbit.jsx";

function Hero() {
  const locationRef = useRef(null);
  const [locationVisible, setLocationVisible] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [time, setTime] = useState("");
  const timeZone = "America/Chicago";

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
    const latitude = 31.1171;
    const longitude = -97.7278;

    async function fetchWeather() {
      try {
        const res = await fetch(
          `/.netlify/functions/weather?lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();

        if (res.status !== 200) {
          setError(data.error || "Weather API error");
          return;
        }

        if (
          data &&
          data.main?.temp !== undefined &&
          Array.isArray(data.weather) &&
          data.weather.length > 0
        ) {
          const localTime = new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone,
          });

          setWeather({
            city: "Killeen, TX",
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
          });

          setTime(localTime);
        } else {
          setError("Failed to load weather data");
        }
      } catch (err) {
        console.error("Weather fetch error:", err);
        setError("Weather unavailable.");
      }
    }

    fetchWeather();
  }, []);

  useEffect(() => {
  if (!timeZone) return;

  const updateTime = () => {
    const now = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone,
    });
    setTime(now);
  };

  updateTime(); // Run once initially
  const now = new Date();
  const delay = (60 - now.getSeconds()) * 1000;

  let intervalId;

  const timeoutId = setTimeout(() => {
    updateTime();
    intervalId = setInterval(updateTime, 60 * 1000);
  }, delay);

  return () => {
    clearTimeout(timeoutId);
    if (intervalId) clearInterval(intervalId);
  };
}, [timeZone]);
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
                <h3 id="location">Killeen, TX</h3>
                {weather && (
                  <div className="weatherText">
                    <div id="condition">
                      🌤 {weather.condition}, {weather.temp}°F
                    </div>
                  </div>
                )}
                {time && (
                  <div className="weatherText">
                    <div id="time">🕒 {time}</div>
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
