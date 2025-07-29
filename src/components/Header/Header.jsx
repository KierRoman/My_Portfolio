import React from 'react';
import './Header.css';

let Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className='header-right'>
            <nav className="header-nav">
              <div className="nav-links">
                <div id="nav1"><a href="#about">About</a></div>
                <div id="nav2"><a href="#projects">Projects</a></div>
                <div id="nav3"><a href="#contact">Contact</a></div>
              </div>
            </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;