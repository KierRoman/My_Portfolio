import React from 'react';
import './Projects.css';

let Projects = () => {
  return (
    <>
    <div className='projects'>
        
        {/* <section id="projects" > */}
            <h1>Projects</h1>
         <div className='banner'>
            <div className='slider' style={{'--quantity': 5 }}>
                <div className='item'style={{'--position': 1}}>
                    <a href="https://github.com/KierRoman/AOT-Whack-a-Mole">
                    <img src='images/AOT.jpg' alt='Attack Titan AOT'>
                    </img>
                    </a>
                    <div className='projectText'>
                        <h4>Whack A Titan</h4>
                        <p>Whack a Mole webgame with Attack on Titan theme!</p>
                    </div>
                    </div>
                <div className='item'style={{'--position': 2}}>
                    <a href="https://github.com/KierRoman/MomMe">
                    <img src='images/MomMe.png' alt='MomMe App Screenshot'>
                </img>
                </a>
                <div className='projectText'>
                    <h4>MomMe</h4>
                    <p>App that helps moms track all things baby!</p>
                </div>
                </div>
                <div className='item'style={{'--position': 3}}>
                    <a href="https://github.com/gerol-r/Reelz-Air">
                        <img src='images/ReelzAir.png' alt='ReelzAir App'>
                        </img>
                    </a>
                    <div className='projectText'>
                        <h4>ReelzAir</h4>
                        <p>Prototype developed with UI/UX designers to build a commerce site for air cleaning units</p>
                    </div>
                    </div>
                <div className='item'style={{'--position': 4}}>
                    <img src='images/OkayestFitness.png' alt='Okayest Fitness App Screenshot'>
                    </img>
                    <div className='projectText'>
                        <h4>Okayest Fitness</h4>
                        <p>App that helps you track your fitness goals!</p>
                    </div>
                    </div>
                <div className='item'style={{'--position': 5}}>
                    <a href="https://github.com/dallas-vanwyk/wekida-event-planning-front-end">
                        <img src='images/WekidaApp.png' alt='Wekida App Screenshot'>
                        </img>
                    </a>
                    <div className='projectText'>
                        <h4>Wekida Event Planner</h4>
                        <p>Event planning app that helps you organize your next event!</p>
                    </div>
                    </div>
                </div>
            </div>
        
        
        {/* </section> */}
    </div>
    </>
  );
}

export default Projects;   