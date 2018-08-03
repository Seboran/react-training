// yarn
import React from "react";
import Highlight from "react-highlight";

export default function CodeExposer({ sourceCode, component: Component }) {
  return (
    <div className="code-exposer">
      <Highlight className="element" language="javascript">
        {sourceCode}
      </Highlight>
      <Component className="element" />
    </div>
  );
}
