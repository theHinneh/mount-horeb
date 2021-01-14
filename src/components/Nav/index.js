import React from "react";
import "./nav-styles.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {data} from '../../data/nav-data';



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
          {data.map((datum, index) => {
            const { name, link } = datum;
            return (
              <NavLink
                key={index}
                exact
                to={link}
                activeStyle={{
                  fontWeight: "bold",
                }}
                className="nav-link"
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
    </div>
  );
};

export default Nav;
