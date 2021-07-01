import React from "react";
import Latest_Sermon from "./Latest_Sermon";
import "./header-styles.css";

const Header = () => {
  return (
    <div
      className="header-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5),rgba(0,0,0,.5)),url("assets/img/cross-on-bible-green.jpg")`,
      }}
    >
      {/* <img
        height="600px"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5),rgba(0,0,0,.5)),url("assets/img/cross-on-bible-green.jpg")`,
        }}
        className="header-bg"
      /> */}
      <div className="header-welcome">
        <h2>
          Welcome to <br /> Mount Horeb London
        </h2>
        <div className="header-buttons">
          <div className="header-button-container">
            <button className="header-button">Come on a Sunday</button>
          </div>
          <div className="header-button-container">
            <button className="header-button">Come on a Thursday</button>
          </div>
          <div className="header-button-container">
            <button className="header-button">Come on a Friday</button>
          </div>
        </div>
      </div>

      <Latest_Sermon />
    </div>
  );
};

export default Header;
