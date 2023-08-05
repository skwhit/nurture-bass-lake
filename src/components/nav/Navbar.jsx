import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoDark from "../../assets/nurture-dark.png";

export default function Navbar({ setHome }) {
  const [active, setActive] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return !active
      ? { color: isActive ? "rgb(196, 164, 84)" : "white" }
      : { color: isActive ? "rgb(196, 164, 84)" : "black" };
  };

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-list");

  const hamburgerClick = () => {
    setActive((active) => !active);
  };

  const navlinkClick = (home) => {
    home === "home" ? setHome(true) : setHome(false);
    setActive(false);
    window.scrollTo(0,0);
  };

  window.addEventListener("resize", () => {
    // Toggle on mobile
    if (window.innerWidth > 600) {
      setActive(false);
    }
  });

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <NavLink
          onClick={() => navlinkClick("home")}
          className={`nav-link`}
          to="/"
        >
          <img src={logoDark} alt="nurture logo" />
        </NavLink>
      </div>
      <div
        className={`hamburger${active ? " active" : ""}`}
        onClick={hamburgerClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-list${active ? " active" : ""}`}>
        <li className="nav-item">
          <NavLink
            onClick={() => navlinkClick("home")}
            style={navLinkStyles}
            className={`nav-link`}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            onClick={navlinkClick}
            style={navLinkStyles}
            className={`nav-link`}
            to="/menu"
          >
            Menu
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            onClick={navlinkClick}
            style={navLinkStyles}
            className={`nav-link`}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            onClick={navlinkClick}
            style={navLinkStyles}
            className={`nav-link`}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
