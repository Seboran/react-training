// yarn
import React from "react";
// material-ui

// components
import HelloWorld from "./HelloWorld";
import CodeExposer from "../CodeExposer";
import HelloWorldClass from "./HelloWorldClass";

export default function Context() {
  return (
    <div>
      <CodeExposer
        sourceCode={`import React from "react";

export default function HelloWorld() {
  return <p>Hello world !</p>;
}
`}
        component={() => <HelloWorld />}
      />
      <CodeExposer
        sourceCode={`import React, { Component } from "react";

export default class HelloWorld extends Component {
  render() {
    return <p>Hello world !</p>;
  }
}
`}
        component={() => <HelloWorldClass />}
      />
    </div>
  );
}
