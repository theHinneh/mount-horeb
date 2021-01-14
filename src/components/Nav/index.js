import React from "react";
import "./nav-styles.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="nav-container">
      {/* Logo */}
      <img className='logo' width="80px" height="80px" src="assets/img/logo_mount.png" alt="" />
      {/* Links */}
      <div className="left">
        <div className="nav-links">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Visit
          </a>
          <a className="nav-link" href="#">
            About Us
          </a>
          <a className="nav-link" href="#">
            Event
          </a>
          <a className="nav-link" href="#">
            Donation
          </a>
          <a className="nav-link" href="#">
            Food Bank
          </a>
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
