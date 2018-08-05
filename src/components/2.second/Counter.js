import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div style={{ display: "flex", alignSelf: "center" }}>
        <Button variant="raised" onClick={this.handleClick}>Incrémenter</Button>
        <Typography variant="display3">{this.state.count}</Typography>
      </div>
    );
  }
}
