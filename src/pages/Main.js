import { Button } from "reactstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Button color="warning">
        <Link to="/map">Go to the map</Link>
      </Button>
    );
  }
}

export default Main;
