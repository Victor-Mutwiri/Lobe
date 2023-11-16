import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className=" flexCenter paddings Navbar">
      <img
        src="./logo.png"
        alt="Logo Image"
        width={100} /* 
        height={80} */
        className="flexCenter"
      />
      <div className="flexCenter Navbarselections">
        <a href="">Overview</a>
        <a href="">Examples</a>
        <a href="">Tour</a>
        <a href="">Blog</a>
        <a href="">Help</a>
        <button className="button navbutton">
          <a href="">Download</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
