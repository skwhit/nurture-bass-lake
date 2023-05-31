import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoDark from "../../assets/nurture-dark.png";

export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return { color: isActive ? "rgb(196, 164, 84)" : "white" };
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <NavLink className={`nav-link`} to="/">
          <img src={logoDark} alt="nurture logo" />
        </NavLink>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink style={navLinkStyles} className={`nav-link`} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navLinkStyles} className={`nav-link`} to="/menu">
            Menu
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink style={navLinkStyles} className={`nav-link`} to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navLinkStyles} className={`nav-link`} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
