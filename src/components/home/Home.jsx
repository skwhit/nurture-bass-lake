import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import acai1 from "../../assets/acai1.jpg";
import coffee1 from "../../assets/coffee1.jpg";
import eggs1 from "../../assets/eggs1.jpg";

import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <section className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          useKeyboardArrows
          interval={5000}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          labels={false}
          className="carousel"
        >
          <div className="carousel-one">
            <img src={acai1} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div className="carousel-two">
            <img src={coffee1} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div className="carousel-three">
            <img src={eggs1} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </section>
      <section className="home-title">
        <h1>NURTURE BASS LAKE</h1>
        <h3>Healthy food for your adventures</h3>
      </section>
    </main>
  );
}
