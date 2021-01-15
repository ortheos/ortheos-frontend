import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Map from "./components/Map.js";
import Main from "./pages/Main.js";
import Sell from "./pages/Sell.js";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/sell" component={Sell}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
