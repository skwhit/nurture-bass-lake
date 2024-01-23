import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import itemOne from "../../assets/itemOne.jpg";
import itemTwo from "../../assets/itemTwo.jpg";
import itemThree from "../../assets/itemThree.jpg";
import itemFour from "../../assets/itemFour.jpg";
import itemFive from "../../assets/itemFive.jpg";
import itemSeven from "../../assets/itemSeven.jpg";
import itemEight from "../../assets/itemEight.jpg";
import itemNine from "../../assets/itemNine.jpg";
import itemTen from "../../assets/itemTen.jpg";


import exteriorTwo from "../../assets/exteriorTwo.jpg";
import exteriorThree from "../../assets/exteriorThree.jpg";
import interiorOne from "../../assets/interiorOne.jpg";
import interiorTwo from "../../assets/interiorTwo.jpg";
import interiorThree from "../../assets/interiorThree.jpg";
import interiorFive from "../../assets/interiorFive.jpg";

import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <section>
        <div className="carousel-container">
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
            <div className="carousel-zero">
              <img src={exteriorTwo} />
            </div>
            <div className="carousel-one">
              <img src={interiorFive} />
            </div>
            <div className="carousel-two">
              <img src={interiorThree} />
            </div>
            <div className="carousel-three">
              <img src={interiorTwo} />
            </div>
            <div className="carousel-four">
              <img src={itemSeven} />
            </div>
            <div className="carousel-five">
              <img src={itemOne} />
            </div>
            {/* <div className="carousel-two">
              <img src={itemTwo} />
            </div> */}
            <div className="carousel-six">
              <img src={itemTen} />
            </div>
            <div className="carousel-seven">
              <img src={itemThree} />
            </div>
            {/* <div className="carousel-four">
              <img src={itemFour} />
              <p className="legend">Legend 3</p>
            </div> */}
            <div className="carousel-eight">
              <img src={interiorOne} />
            </div>
            <div className="carousel-nine">
              <img src={itemEight} />
            </div>
            <div className="carousel-ten">
              <img src={itemNine} />
            </div>
          </Carousel>
        </div>
        <div className="home-title">
          <h1>NURTURE YOURSELF, NURTURE OTHERS</h1>
          {/* <h3>NURTURE YOURSELF, NURTURE OTHERS</h3> */}
        </div>
      </section>
    </main>
  );
}
