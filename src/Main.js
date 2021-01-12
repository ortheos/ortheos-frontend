import "./App.css";
import { Button } from "reactstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SimpleMap from "./Map.js";
import Sells from "./Sell.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";


class Main extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ortheos</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div className="App">
			<header className="App-header">
				
				<p>ORTHEOS</p>
				<BrowserRouter>
					<div>
						<Button color="warning"><Link to="/Map">Map </Link></Button>
						<Button color="warning"><Link to="/Sell">Vente d'une Orthèse</Link></Button>
					</div>  
					<Switch>
						<Route exact path="/Map" component={SimpleMap} />
						<Route exact path="/Sell" component={Sells} />
					</Switch>
				</BrowserRouter>
			</header>
			</div>
      </>
    );
  }
}

export default Main;
