import React from "react";
import "./nav-styles.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { data } from "../../data/nav-data";

const myFunction = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

const Nav = () => {
  return (
    <div className="nav-container topnav">
      {/* Logo */}
      <img
        className="logo"
        width="80px"
        height="80px"
        src="assets/img/logo_mount.png"
        alt=""
      />
      {/* Links */}
      <div className="left" id="myLinks">
        <div className="nav-links" id="myLinks">
          {data.map((datum, index) => {
            const { name, link, className } = datum;
            return (
              <NavLink
                key={index}
                exact
                to={link}
                activeStyle={{
                  color: "#333333",
                }}
                className={className}
                onClick={() => datum.action}
              >
                {name}
              </NavLink>
            );
          })}
        </div>
        {/* Social */}
        <div className="nav-social-links">
          <a className="nav-social-link" href="#">
            <FaTwitter className="icon" />
          </a>
          <a className="nav-social-link" href="#">
            <FaInstagram className="icon" />
          </a>
          <a className="nav-social-link" href="#">
            <FaFacebookF className="icon" />
          </a>
          <a className="nav-social-link" href="#">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
      <a href="javascript:void(0);" className="hamburger" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Nav;
