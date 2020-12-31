import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SimpleMap from "./components/Map.js";
import Main from "./pages/Main.js";

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
