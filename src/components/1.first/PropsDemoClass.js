import React, { Component } from "react";

export default class PropsDemoClass extends Component {
  render() {
    const { name, surname } = this.props;

    return (
      <div>
        {name} {surname}
      </div>
    );
  }
}
