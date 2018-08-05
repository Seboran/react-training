import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton
} from "../../../node_modules/@material-ui/core";
import Add from "@material-ui/icons/Add";

export default class ArrayDavidson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motorbikes: ["Honda", "BMW", "Suzuki"],
      newBike: ""
    };
  }

  handleChange = event => {
    this.setState({ newBike: event.target.value });
  };

  addBike = () => {
    if (!this.state.newBike) return;

    this.setState(function(prevState) {
      const newState = {
        newBike: "",
        motorbikes: [prevState.newBike, ...prevState.motorbikes]
      };

      return newState;
    });
  };

  render() {
    const { motorbikes, newBike } = this.state;

    return (
      <div>
        <Typography variant="title">Liste de motos</Typography>
        <TextField
          label="Ajouter nouvelle moto"
          value={newBike}
          onChange={this.handleChange}
        />
        <IconButton onClick={this.addBike}>
          <Add />
        </IconButton>
        <List>
          {motorbikes.map(moto => (
            <ListItem key={moto}>
              <ListItemText>{moto}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
