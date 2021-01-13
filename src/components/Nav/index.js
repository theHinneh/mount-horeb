import React from "react";
import "./nav-styles.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="nav-container">
      {/* Logo */}
      <img width="89px" height="89px" src="assets/img/logo_mount.png" alt="" />
      {/* Links */}
      <div className="left">
        <div className="nav-links">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Link
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
            <FaTwitter />
          </a>
          <a className="nav-social-link" href="#">
            <FaInstagram />
          </a>
          <a className="nav-social-link" href="#">
            <FaFacebookF />
          </a>
          <a className="nav-social-link" href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
