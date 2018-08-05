// yarn
import React from "react";
import Highlight from "react-highlight";
// material-ui
import Typography from "@material-ui/core/Typography";
import StateDemo from "./StateDemo";

// components
import SwipeableKeyboard from "../SwipeableKeyboard";
import MainPoints from "../MainPoints";
import CelciusToFarhenheit from "./CelciusToFarhenheit";
import Counter from "./Counter";
import CodeExposer from "../CodeExposer";

export default function FullPage2() {
  return (
    <div>
      <Typography variant="display2">Classes et flux</Typography>

      <SwipeableKeyboard>
        <div>
          <Typography variant="display1">Un bête compteur</Typography>
          <Counter />
        </div>
        <div>
          <Highlight language="javascript">{`<div>
  <Button onClick={this.handleClick}>Incrémenter</Button>
  <p>{this.state.count}</p>
</div>`}</Highlight>
        </div>

        <MainPoints
          points={[
            "this.state : respecter le cycle de vie d'un composant",
            "this.state est \"inmutable\"",
            "React met à jour l'affichage des composants automatiquement",
            "Cela signifie que cette mise à jour est une opération asynchrone"
          ]}
        />
        <div>
          <Highlight language="javascript">{`constructor() {
  super();

  this.state = {
    count: 0
  };
}`}</Highlight>
          <Highlight language="javascript">{`handleClick = () => {
  this.setState(function(prevState) {
    return { count: prevState.count + 1 };
  });
};`}</Highlight>
          <Counter />
        </div>

        <div>
          <Typography variant="display1">2 buttons 1 state</Typography>
          <CodeExposer
            sourceCode={`constructor(props) {
  super(props);

  this.state = {
    count: 0
  };
};
            
            
getOneDirection = () => {
  this.setState({ oneDirection: oneDirectionArray });
};

deleteOneDirection = () => {
  this.setState({ oneDirection: [] });
};`}
            component={() => <StateDemo />}
          />
        </div>

        <div>
          <Typography variant="display1">Lifting state up</Typography>
          <Highlight language="javascript">
            {`function TemperatureForm({ temp, unitName, unit, handleChange }) {
  return (
    <TextField
      id={unitName}
      value={temp}
      label={\`Température en \${unit}\`}
      onChange={handleChange}
    />
  );
}`}
          </Highlight>
          <CelciusToFarhenheit />
        </div>

        <Highlight language="javascript">{`render() {
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
  }`}</Highlight>
        <Highlight language="javascript">{`constructor(props) {
    super(props);

    this.state = {
      celcius: 0,
      fahrenheit: 32
    };
  }`}</Highlight>
      </SwipeableKeyboard>
    </div>
  );
}
