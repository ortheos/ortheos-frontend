import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GoogleApiWrapper from "./components/Map.js";
import Main from "./pages/Main.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/map" component={GoogleApiWrapper} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
