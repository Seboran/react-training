import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import "./App.css";

import Typography from "@material-ui/core/Typography";

// components
import FullPage from "./components/0.zero/FullPage";
import FullPage1 from "./components/1.first/FullPage1";
import FullPage2 from "./components/2.second/FullPage2";
import FullPage3 from "./components/3.third/FullePage3";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  /**
   *
   * @param {KeyboardEvent} event
   */
  handleKeyPress = event => {
    let increment = 0;

    if (event.key === "ArrowDown") {
      increment = 1;
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      increment = -1;
      event.preventDefault();
    }

    if (!!increment) {
      this.setState(
        prevState => {
          return { currentPage: prevState.currentPage + increment };
        },
        () =>
          scrollToComponent(this[this.state.currentPage], {
            offset: -50,
            align: "top"
          })
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div className="page" ref={section => (this[0] = section)}>
          <FullPage />
        </div>
        <div className="page" ref={section => (this[1] = section)}>
          <FullPage1 />
        </div>
        <div className="page" ref={section => (this[2] = section)}>
          <FullPage2 />
        </div>
        <div className="page" ref={section => (this[3] = section)}>
          <FullPage3 />
        </div>
        <div ref={section => (this[4] = section)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 700,
            marginBottom: 700
          }}
        >
          <div>
            <span
              role="img"
              aria-label="heart"
              style={{ fontSize: 200, margin: "auto" }}
            >
              💖
            </span>
          </div>
          <Typography variant="display4" align="center">
            Merci pour votre attention
          </Typography>
        </div>
      </div>
    );
  }
}

export default App;
