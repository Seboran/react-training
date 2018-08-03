import React from "react";

/**
 *
 * @param {*} props
 * @param {string} props.name
 * @param {string} props.surname
 */
export default function PropsDemo(props) {
  const { name, surname } = props;

  return (
    <div>
      {name} {surname}
    </div>
  );
}
