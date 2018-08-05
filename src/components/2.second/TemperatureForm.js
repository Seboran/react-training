import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

export default function TemperatureForm({
  temp,
  unitName,
  unit,
  handleChange
}) {
  return (
    <TextField
      id={unitName}
      value={temp}
      label={`Température en ${unit}`}
      onChange={handleChange}
    />
  );
}

TemperatureForm.propTypes = {
  temp: PropTypes.number.isRequired,
  unitName: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
