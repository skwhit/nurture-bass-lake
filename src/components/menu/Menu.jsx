import React from "react";
import "./Menu.css";
import menuOne from "../../assets/menuOne.png";
import menuTwo from "../../assets/menuTwo.png";
import menuThree from "../../assets/menuThree.png";
import menuFour from "../../assets/menuFour.jpg";

export default function Menu() {
  return (
    <main className="menu-container">
      <section>
        <div>
          <img src={menuOne} alt="Menu Page One" />
        </div>
        <div>
          <img src={menuTwo} alt="Menu Page Two" />
        </div>
        <div>
          <img src={menuThree} alt="Menu Page Three" />
        </div>
        <div>
          <img src={menuFour} alt="Menu Page Four" />
        </div>
      </section>
    </main>
  );
}
