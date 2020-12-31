import "./App.css";
import { Button } from "reactstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Main extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ortheos</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Button color="warning">
          <Link to="/map">Go to the map</Link>
        </Button>
      </>
    );
  }
}

export default Main;
