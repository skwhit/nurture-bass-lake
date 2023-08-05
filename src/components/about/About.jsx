import React from "react";
import "./About.css";
import bassLake1 from "../../assets/bassLake1.jpg";
import bassLake2 from "../../assets/bassLake2.jpg";
import bassLake3 from "../../assets/bassLake3.jpg";
import restaurant from "../../assets/restaurant-inside.jpg"
import acai1 from "../../assets/acai1.jpg";
import coffee1 from "../../assets/coffee1.jpg";
import eggs1 from "../../assets/eggs1.jpg";

export default function About() {
  return (
    <main className="about-container">
      <section className="restaurant-info">
        <div className="restaurant-info-one">
          <div>
            {" "}
            <h1>MISSION STATEMENT</h1>
            <p>
              Our mission is to help people nurture themselves and their
              relationships with others over good food and to provide a space
              for all to gather and feel welcomed.
            </p>
          </div>
          <div>
            {" "}
            <h1>WHERE WE'RE LOCATED</h1>
            <p>
              We are located in the heart of the Pines Village in Bass Lake,
              California. Bass Lake is an exclusive resort area and fun mountain
              community, located just south of Yosemite National Park.
            </p>
          </div>
        </div>
        <div className="restaurant-info-two">
          <div className="restaurant-info-two-left">
            <div>
              <img src={bassLake1} alt="Image of Bass Lake" />
            </div>
            <div>
              <img src={bassLake3} alt="Image of Bass Lake" />
            </div>
          </div>

          <div className="restaurant-info-two-right">
            <img src={bassLake2} alt="Image of Bass Lake" />
          </div>
        </div>
        <div className="restaurant-info-three">
          <div className="restaurant-info-three-top">
            <img src={restaurant} alt="Image inside the restaurant" />
          </div>
          <div className="restaurant-info-three-bottom">
            <div>
              <img src={acai1} alt="Image of Acai bowl menu item" />
            </div>
            <div>
              <img src={coffee1} alt="Image of coffee menu item" />
            </div>
            <div>
              <img src={eggs1} alt="Image of breakfast menu item" />
            </div>
          </div>
        </div>

        <div className="restaurant-info-four">
          <div>
            <h1>WHO WE SERVE</h1>
            <p>
              Whether you're a Bass Lake local or you are vacationing at Bass
              Lake, we have a place for you. We offer our customers an inviting
              environment in which to linger and enjoy food and beverages. We
              have comfortable indoor dining as well as patio dining at the back
              of the building that has a rare view of Bass Lake. The patio is a
              very relaxing area to enjoy casual dining under the trees.
            </p>
          </div>
          <div>
            <h1>WHAT WE SERVE</h1>
            <p>
              Nurture Bass Lake offers excellent coffee choices, and various
              breakfast items. We also specialize in Acai bowls made with fresh
              and locally sourced ingredients.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
