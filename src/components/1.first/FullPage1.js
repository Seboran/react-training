import React from "react";
// material-ui
import Typography from "@material-ui/core/Typography";
import Context from "./Context";
import SwipeableViews from "react-swipeable-views";

// components
import CodeExposer from "../CodeExposer";
import Composition from "./Composition";
import JSX from "./JSX";

export default function FullPage1() {
  return (
    <div>
      <Typography variant="display2">Principe des composants</Typography>
      <SwipeableViews className="swipeable-views" enableMouseEvents>
        <div>
          <Typography variant="display1">Composants</Typography>
          <Context />
        </div>

        <div>
          <Typography variant="display1">Composition et props</Typography>

          <CodeExposer
            sourceCode={`function PropsDemo(props) {
  const { name, surname } = props;

  return (
    <div>
      {name} {surname}
    </div>
  );
}
`}
          />

          <CodeExposer
            sourceCode={`function Composition() {
  return (
    <div>
      <PropsDemo name="Liam" surname="Payne" />
      <PropsDemo name="Niall" surname="Horan" />
      <PropsDemo name="Harry" surname="Styles" />
      <PropsDemo name="Louis" surname="Tomlinson" />
    </div>
  );
}`}
            component={() => <Composition />}
          />
        </div>

        <div>
          <CodeExposer
            sourceCode={`import React from "react";
import PropsDemo from "./PropsDemo";

const oneDirection = [{
    name: "Liam", surname:"Payne"}, /*...*/]

export default function JSX() {
  return (
    <div>
        {oneDirection.map((singer, index) => 
        <PropsDemo 
          key={index} 
          name={singer.name} 
          surname={singer.surname} />)}
    </div>
  );
}`}
            component={() => <JSX />}
          />
        </div>
      </SwipeableViews>
    </div>
  );
}
