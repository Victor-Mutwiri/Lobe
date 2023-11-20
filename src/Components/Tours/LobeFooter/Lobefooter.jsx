import React from "react";
import "./Lobefooter.css";

const Lobefooter = () => {
  return (
    <footer>
      <section>
        <img src="./logo.png" alt="Lobe Logo" width={100} />
        <li>A product by Microsoft</li>
        <li>All rights reserved</li>
        <li>Microsoft 2021</li>
      </section>
      <section>
        <h2>About</h2>
        <a href="">Download</a>
        <a href="">Overview</a>
        <a href="">Examples</a>
        <a href="">Blog</a>
      </section>
      <section>
        <h2>General</h2>
        <a href="">Notice</a>
        <a href="">License</a>
        <a href="">Press Inquiry</a>
        <a href="">Press Images</a>
      </section>
      <section>
        <h2>Resources</h2>
        <a href="">Help</a>
        <a href="">Tour</a>
        <a href="">Contact</a>
        <a href="">Privacy</a>
      </section>
    </footer>
  );
};

export default Lobefooter;
