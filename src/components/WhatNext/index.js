import React from "react";
import interim2 from "../../interim2.svg";
import "./whatNext-styles.css";

const WhatNext = () => {
  return (
    <div className="what-next-container">
      <h2 className="what-next-heading">WHAT NEXT?</h2>
      <img className="interimImage" src={interim2} alt="Interim" />
      <div className="what-next-buttons">
        <div className="what-next-button-container">
          <button className="what-next-button">Become a partner</button>
        </div>
        <div className="what-next-button-container">
          <button className="what-next-button">Become a Member</button>
        </div>
        <div className="what-next-button-container">
          <button className="what-next-button">Welcome Meal</button>
        </div>
        <div className="what-next-button-container">
          <button className="what-next-button">Men's Fellowship</button>
        </div>
        <div className="what-next-button-container">
          <button className="what-next-button">Women's Fellowship</button>
        </div>
        <div className="what-next-button-container">
          <button className="what-next-button">Youth and Children</button>
        </div>
      </div>
    </div>
  );
};

export default WhatNext;
