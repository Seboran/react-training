import React from "react";
import PropTypes from "prop-types";

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

PropsDemo.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
};
