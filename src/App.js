import "./App.css";
import SimpleMap from "./Map.js";
import Main from "./Main.js";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/map" component={SimpleMap} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
