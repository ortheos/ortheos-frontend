import "./App.css";
import SimpleMap from "./Map.js";
import Main from "./Main.js";
import Sells from "./Sell.js"
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Map from "./components/Map.js";
import Main from "./pages/Main.js";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/sell" components={Sells}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
