import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_API_KEY);
Geocode.setLanguage("fr");
Geocode.setRegion("fr");

class Sell extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCoordinates(address) {
    Geocode.fromAddress(address).then(
     response => {
      const {lat, lng} = response.results[0].geometry.location;
      console.log(lat, lng);
      return {
        lat, 
        lng
      }

    },
    error => {
      console.error(error);
    }  
    );
  }

  handleSubmit(event) {
    var vente = JSON.stringify({
      name: document.getElementById("brand").value,
      description: document.getElementById("desc").value,
      price: document.getElementById("price").value,
      city: document.getElementById("city").value,
    });
    var coord = this.getCoordinates(document.getElementById("city").value)
    console.log(coord)
    localStorage.setItem("newItem", vente); //stockage mémoire des comptes non connectés
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">Mettre en ligne une orthèse</Label>
                <Input
                  type="brand"
                  name="brand"
                  id="brand"
                  placeholder="Nom du produit"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleDesc">Description</Label>
                <Input
                  type="desc"
                  name="desc"
                  id="desc"
                  placeholder="Description du produit"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleLastName">Prix</Label>
                <Input
                  type="price"
                  name="price"
                  id="price"
                  placeholder="Prix"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleVille">Ville</Label>
                <Input type="city" name="city" id="city" placeholder="Ville" />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={this.handleSubmit}>Mettre en vente</Button>
        </Form>
      </>
    );
  }
  
}


export default Sell;
