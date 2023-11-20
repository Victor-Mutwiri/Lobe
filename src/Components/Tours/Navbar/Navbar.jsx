import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img
        src="./logo.png"
        alt="Logo Image"
        width={100} /* 
        height={80} */
        className="flexCenter"
      />
      <nav>
        <NavLink to="/#">Overview</NavLink>
        <NavLink to="/Examples">Examples</NavLink>
        <NavLink to="/">Tour</NavLink>
        <NavLink to="#">Blog</NavLink>
        <NavLink to="#">Help</NavLink>
        <button>
          <a href="" className="nav-buttons">
            Download
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
