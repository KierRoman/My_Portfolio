import React from "react";
import "./Header.css";

let Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="items item1">
          <img src="images/HTML.png" alt="HTML Logo" />
        </div>
        <div className="items item2">
          <img src="images/Javascript.png" alt="Javascript Logo" />
        </div>
        <div className="items item3">
          <img src="images/CSS.png" alt="CSS Logo" />
        </div>
        <div className="items item4">
          <img src="images/React.png" alt="React Logo" />
        </div>
        <div className="items item5">
          <img src="images/NodeJS.png" alt="NodeJS Logo" />
        </div>
        <div className="items item6">
          <img src="images/MongoDB.png" alt="MongoDB Logo" />
        </div>
        <div className="items item7">
          <img src="images/PostgreSQL.png" alt="PostgreSQL Logo" />
        </div>
        <div className="items item8">
          <img src="images/Django.png" alt="Django Logo" />
        </div>
        <div className="items item9">
          <img src="images/Python.png" alt="Python Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
