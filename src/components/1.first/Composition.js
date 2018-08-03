import React from "react";
import PropsDemo from "./PropsDemo";

export default function Composition() {
  return (
    <div>
      <PropsDemo name="Liam" surname="Payne" />
      <PropsDemo name="Niall" surname="Horan" />
      <PropsDemo name="Harry" surname="Styles" />
      <PropsDemo name="Louis" surname="Tomlinson" />
    </div>
  );
}
