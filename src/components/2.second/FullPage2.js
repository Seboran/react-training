// yarn
import React from "react";
import Highlight from "react-highlight";
// material-ui
import Typography from "@material-ui/core/Typography";
import StateDemo from "./StateDemo";

// components
import SwipeableKeyboard from "../SwipeableKeyboard";

export default function FullPage2() {
  return (
    <div>
      <Typography variant="display2">Classes et flux</Typography>
      <SwipeableKeyboard>
        <div>
          <Typography variant="display1">État d'un composant</Typography>

          <Highlight language="javascript">
            {`class StateDemo extends Component {
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
            key={singer.name+singer.surname}
            name={singer.name}
            surname={singer.surname}
          />
        ))}
      </div>
    );
  }
}
`}
          </Highlight>
          
        </div>

        <div>
            <StateDemo />
          </div>

        <div className="main-text">
          <Typography variant="display1">
            Flux d'information unidirectionnel
          </Typography>
        </div>
      </SwipeableKeyboard>
    </div>
  );
}
