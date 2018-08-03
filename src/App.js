import React, { Component } from "react";
import "./App.css";

// components
import FullPage from "./components/0.zero/FullPage";
import FullPage1 from "./components/1.first/FullPage1";
import FullPage2 from "./components/2.second/FullPage2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page">
          <FullPage />
        </div>
        <div className="page">
          <FullPage1 />
        </div>
        <div className="page">
          <FullPage2 />
        </div>
      </div>
    );
  }
}

export default App;
