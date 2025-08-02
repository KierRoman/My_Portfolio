import React from "react";
import "./Projects.css";

let Projects = () => {
  return (
    <>
      <div className="projects">
        {/* <section id="projects" > */}
        <h1>Projects</h1>
        <div className="banner">
          <div className="slider" style={{ "--quantity": 5 }}>
            <div className="item" style={{ "--position": 1 }}>
              <img src="images/AOT.jpg" alt="Attack Titan AOT" draggable="false"></img>
              <a href="https://kierroman.github.io/AOT-Whack-a-Mole/" target="_blank" rel="noopener noreferrer">
                Visit Website &rarr;
              </a>
              <div className="projectText">
                <h4>- Whack A Titan -</h4> <br/>
                <p>Whack a Mole webgame with Attack on Titan theme!</p>
                <div className="technologies">
                  <img id="tech" src="images/Javascript.png" alt="" draggable="false" />
                  <img id="tech" src="images/HTML.png" alt="" draggable="false" />
                  <img id="tech" src="images/CSS.png" alt="" draggable="false" />
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src="images/MomMe.png" alt="MomMe App Screenshot" draggable="false"></img>
              <a href="https://momme-3b787f93f096.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Visit Website &rarr;
              </a>
              <div className="projectText">
                <h4>- MomMe -</h4> <br/>
                <p>App that helps moms track all things baby!</p>
                <div className="technologies">
                  <img id="tech" src="images/Python.png" alt="" draggable="false" />
                  <img id="tech" src="images/PostgreSQL.png" alt="" draggable="false" />
                  <img id="tech" src="images/CSS.png" alt="" draggable="false" />
                  <img id="tech" src="images/Django.png" alt="" draggable="false" />
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src="images/ReelzAir.png" alt="ReelzAir App" draggable="false"></img>
              <a href="https://reelz-air-03741770c378.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Visit Website &rarr;
              </a>
              <div className="projectText">
                <h4>- ReelzAir -</h4> <br/>
                <p>
                  Prototype mobile site developed with UI/UX designers to build a commerce
                  site for air cleaning units
                </p>
                <div className="technologies">
                  <img id="tech" src="images/Python.png" alt="" draggable="false" />
                  <img id="tech" src="images/PostgreSQL.png" alt="" draggable="false" />
                  <img id="tech" src="images/CSS.png" alt="" draggable="false" />
                  <img id="tech" src="images/Django.png" alt="" draggable="false" />
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img
                src="images/OkayestFitness.png"
                alt="Okayest Fitness App Screenshot"
                draggable="false"
              ></img>
              <a href="https://okayestfitness-2957c3ac2916.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Visit Website &rarr;
              </a>
              <div className="projectText">
                <h4>- Okayest Fitness -</h4> <br/>
                <p>App that helps you track your fitness goals!</p>
                <div className="technologies">
                  <img id="tech" src="images/MongoDB.png" alt="" draggable="false" />
                  <img id="tech" src="images/Express.png" alt="" draggable="false" />
                  <img id="tech" src="images/NodeJS.png" alt="" draggable="false" />
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src="images/WekidaApp.png" alt="Wekida App Screenshot" draggable="false"></img>
              <a href="https://wekida.netlify.app/" target="_blank" rel="noopener noreferrer">
                Visit Website &rarr;
              </a>
              <div className="projectText">
                <h4>- Wekida Event Planner -</h4> <br/>
                <p>
                  Event planning app that helps you organize your next event!
                </p>
                <div className="technologies">
                  <img id="tech" src="images/MongoDB.png" alt="" draggable="false" />
                  <img id="tech" src="images/Express.png" alt="" draggable="false" />
                  <img id="tech" src="images/React.png" alt="" draggable="false" />
                  <img id="tech" src="images/NodeJS.png" alt="" draggable="false" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </section> */}
      </div>
    </>
  );
};

export default Projects;
