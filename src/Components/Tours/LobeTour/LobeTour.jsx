import React from "react";
import "./LobeTour.css";

const LobeTour = () => {
  return (
    <div>
      <section className="top">
        <h2 className="title grey">
          Lobe <span className="green"> Tour</span>
        </h2>
        <article className="weight">
          <p className="grey">
            Build your first machine learning model in ten
            <br />
            minutes. No code or experience required.
          </p>
        </article>
      </section>
      <section className=" container">
        <img src="./AI.jpg" alt="AI Image" width={700} />
      </section>
      <section className="train">
        <h2 className="title grey">
          Train your app
          <br /> with Lobe
        </h2>
      </section>
      <button className="button">Download</button>
      <hr />
    </div>
  );
};

export default LobeTour;
