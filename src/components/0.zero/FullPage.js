import React from "react";
import logo from "./../../logo.svg";
// material-ui

// components
import SwipeableKeyboard from "./../SwipeableKeyboard";

import "./FullPage.css";
import MainPoints from "../MainPoints";

export default function FullPage() {
  return (
    <div>
      <SwipeableKeyboard className="swipeable-views">
        <img src={logo} alt="React" />
        <MainPoints
          points={[
            "Un framework javascript basé sur les composants",
            "JSX = HTML augmenté",
            "Toujours un package qui fait ce que l'on veut",
            "Bonnes performances grâce au DOM virtuel"
          ]}
        />
        <MainPoints
          points={[
            "Beaucoup de boilerplate code",
            'Programmation un peu "hacky"',
            "Pas de standards de programmation",
            "Risque de faire du spaghetti code 🍝"
          ]}
        />
      </SwipeableKeyboard>
    </div>
  );
}
