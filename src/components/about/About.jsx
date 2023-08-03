import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-container">
      <section className="restaurant-info">
        <div className="restaurant-info-left">
          <div>
            {" "}
            <h1>Mission Statement</h1>
            <p>
              Our mission is to help people nurture themselves and their
              relationships with others over good food and to provide a space
              for all to gather and feel welcomed.
            </p>
          </div>
          <div>
            <h1>Who we serve</h1>
            <p>
              Whether you're a Bass Lake local or you are vacationing at Bass Lake.
              We will offer our customers a nurturing environment in which to
              linger and enjoy their food and beverages. We will have
              comfortable indoor dining as well as patio dining at the back of
              the building that has a rare view of Bass Lake. The patio will be
              a very relaxing area to enjoy casual dining under the trees.
            </p>
          </div>
          <div>
            <h1>What we serve</h1>
            <p>
              Nurture Bass Lake offers excellent coffee choices, and
              various breakfast items in the Village of Bass Lake, California,
              an exclusive resort area and fun mountain community, which is
              located just south of Yosemite.
            </p>
          </div>
        </div>
        <div className="restaurant-info-right"></div>
      </section>
    </main>
  );
}
