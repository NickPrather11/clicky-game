import React from "react";
import "../css/header.css";

const Header = ({ score, topScore }) => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <h1>Clicky Game</h1>
        </div>
        <div>
          <h3>Click an image to begin!</h3>
        </div>
        <div>
          <h1>
            Score: {score} | Top Score: {topScore}
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Header;
