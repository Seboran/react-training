// yarn
import React from "react";
import Highlight from "react-highlight";

import "./CodeExposer.css";

export default function CodeExposer({ sourceCode, component: Component }) {
  return (
    <div className="code-exposer">
      <Highlight className="highlight" language="javascript">
        {sourceCode}
      </Highlight>

      {Component && (
        <div className="element">
          <Component />
        </div>
      )}
    </div>
  );
}
