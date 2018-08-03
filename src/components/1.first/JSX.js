import React from "react";
import PropsDemo from "./PropsDemo";

const oneDirection = [
  {
    name: "Liam",
    surname: "Payne"
  },
  {
    name: "Niall",
    surname: "Horan"
  },
  {
    name: "Harry",
    surname: "Styles"
  },
  {
    name: "Louis",
    surname: "Tomlinson"
  }
];

export default function JSX() {
  return (
    <div>
      {oneDirection.map((singer, index) => (
        <PropsDemo key={index} name={singer.name} surname={singer.surname} />
      ))}
    </div>
  );
}
