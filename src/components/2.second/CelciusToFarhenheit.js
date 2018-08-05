import React, { Component } from "react";


import TemperatureForm from "./TemperatureForm";

export default class CelciusToFarhenheit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celcius: 0,
      fahrenheit: 32
    };
  }

  C2F(tempC) {
    return ((tempC * 9) / 5 + 32) | 0;
  }

  F2C(tempF) {
    return (((tempF - 32) * 5) / 9) | 0;
  }

  handleChange = valueName => event => {
    const newValue = parseInt(event.target.value, 10) || 0;

    if (valueName === "celcius") {
      this.setState({
        celcius: newValue,
        fahrenheit: this.C2F(newValue)
      });
    } else {
      this.setState({
        fahrenheit: newValue,
        celcius: this.F2C(newValue)
      });
    }
  };

  render() {
    const { celcius, fahrenheit } = this.state;

    return (
      <div>
        <TemperatureForm
          temp={celcius}
          unitName="celcius"
          unit="°C"
          handleChange={this.handleChange("celcius")}
        />

        <br />
        <TemperatureForm
          temp={fahrenheit}
          unitName="fahrenheit"
          unit="°F"
          handleChange={this.handleChange("fahrenheit")}
        />
      </div>
    );
  }
}
