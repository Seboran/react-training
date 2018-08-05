import React from "react";

// material-ui
import Typography from "@material-ui/core/Typography";
import "./MainPoints.css";

export default function MainPoints(props) {
  const { points } = props;

  return (
    <div className="short-description">
      {points.map((point, index) => (
        <Typography key={index} variant="body2" style={{ fontSize: 30 }}>
          {point}
        </Typography>
      ))}
    </div>
  );
}
