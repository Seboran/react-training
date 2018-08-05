import React from "react";
import Highlight from "react-highlight";
// material-ui
import Typography from "@material-ui/core/Typography";
import Context from "./Context";

// components
import CodeExposer from "../CodeExposer";
import Composition from "./Composition";
import JSX from "./JSX";
import SwipeableKeyboard from "./../SwipeableKeyboard";
import MainPoints from "../MainPoints";

export default function FullPage1() {
  return (
    <div>
      <Typography variant="display2">Principe des composants</Typography>
      <SwipeableKeyboard className="swipeable-views">
        <div>
          <Typography variant="display1">Composants</Typography>
          <Context />
        </div>

        <MainPoints
          points={[
            "Les composants sont des classes ou des fonctions",
            'Ils reçoivent des "props" comme on passe des attributs à des objets HTML'
          ]}
        />

        <div>
          <Typography variant="display1">Composition et props</Typography>

          <CodeExposer
            sourceCode={`function PropsDemo({ name, surname }) {
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
          <Typography variant="display1">La magie de JSX</Typography>
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

        <MainPoints
          points={[
            'Les props sont "immutables"',
            "On peut définir leur type avec PropTypes",
            
          ]}
        />
        <Highlight language="javascript">{`import React from "react";
import PropTypes from "prop-types";

function PropsDemo(props) {
  const { name, surname } = props;

  return (
    <div>
      {name} {surname}
    </div>
  );
}

PropsDemo.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
};
`}</Highlight>
      </SwipeableKeyboard>
    </div>
  );
}
