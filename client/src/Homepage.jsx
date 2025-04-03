import React from "react";

function Homepage() {
  return (
    <main>
      <section className="index-banner">
        <div className="vertical-center">
          <h2>
            BE A GENIUS WITH
            <br />
            GENIUS E-LIBRARY
          </h2>
          <h1>
            Building an e-library including visual and audio books for
            Education, Information and Entertainment one book at a time.
          </h1>
        </div>
      </section>
      <section className="index-links">
        <a href="cases.html">
          <div className="index-boxlink-square">
            <h3>HOME</h3>
          </div>
        </a>
        <a href="cases.html">
          <div className="index-boxlink-rectangle">
            <h3>BOOK CATEGORIES</h3>
          </div>
        </a>
        <a href="cases.html">
          <div className="index-boxlink-square">
            <h3>BOOK LISTS</h3>
          </div>
        </a>
        <a href="#">
          <div className="index-boxlink-rectangle">
            <h3>MY ACCOUNT</h3>
          </div>
        </a>
        <a href="#">
          <div className="index-boxlink-square">
            <h3>ABOUT</h3>
          </div>
        </a>
        <a href="#">
          <div className="index-boxlink-rectangle">
            <h3>CONTACT</h3>
          </div>
        </a>
      </section>
    </main>
  );
}

export default Homepage;
