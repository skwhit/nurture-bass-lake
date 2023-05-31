import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import acai1 from '../../assets/acai1.jpg'
import coffee1 from '../../assets/coffee1.jpg'
import eggs1 from '../../assets/eggs1.jpg'

import "./Home.css"

export default function Home() {
  return (
    <Carousel className="carousel">
      <div>
        <img src={acai1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={coffee1} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={eggs1} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}
