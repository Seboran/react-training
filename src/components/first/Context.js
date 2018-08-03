// yarn
import React from "react";
// material-ui

// components
import HelloWorld from "./HelloWorld";
import CodeExposer from "../CodeExposer";

export default function Context() {
  return (
    <CodeExposer
      sourceCode={`// yarn
import React from "react";

export default function HelloWorld() {
  return <p>Hello world !</p>;
}
`}
      component={() => <HelloWorld />}
    />
  );
}
