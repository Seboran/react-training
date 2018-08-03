import React, { Component } from "react";
import PropsDemo from "../1.first/PropsDemo";
import { Button } from "../../../node_modules/@material-ui/core";

const oneDirectionArray = [
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

export default class StateDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oneDirection: []
    };
  }

  getOneDirection = () => {
    this.setState({
      oneDirection: oneDirectionArray
    });
  };

  deleteOneDirection = () => {
    this.setState({ oneDirection: [] });
  };

  render() {
    const { oneDirection } = this.state;

    return (
      <div>
        <Button onClick={this.getOneDirection}>Afficher les 1D 😍😍😍</Button>
        <Button onClick={this.deleteOneDirection}>Cacher les 1D 😢😢😢</Button>
        {oneDirection.map(singer => (
          <PropsDemo
            key={singer.name + singer.surname}
            name={singer.name}
            surname={singer.surname}
          />
        ))}
      </div>
    );
  }
}
