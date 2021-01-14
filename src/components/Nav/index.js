import React from "react";
import "./nav-styles.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      {/* Logo */}
      <img
        className="logo"
        width="80px"
        height="80px"
        src="assets/img/logo_mount.png"
        alt=""
      />
      {/* Links */}
      <div className="left">
        <div className="nav-links">
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
            }}
            className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/visit"
            activeStyle={{
              fontWeight: "bold",
            }}
            className="nav-link"
          >
            Visit
          </NavLink>
          <NavLink
            to="/about-us"
            activeStyle={{
              fontWeight: "bold",
            }}
            className="nav-link"
          >
            About Us
          </NavLink>
          <NavLink
            to="/event"
            activeStyle={{
              fontWeight: "bold",
            }}
            className="nav-link"
          >
            Event
          </NavLink>
          <NavLink
            to="/donation"
            activeStyle={{
              fontWeight: "bold",
            }}
            className="nav-link"
          >
            Donation
          </NavLink>
          <NavLink
            to="/food-bank"
            activeStyle={{
              fontWeight: "bold",
            }}
            className="nav-link"
          >
            Food Bank
          </NavLink>
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
    </div>
  );
};

export default Nav;
