import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import Geocode from "react-geocode";
import axios from 'axios'

Geocode.setApiKey(process.env.REACT_APP_API_KEY);
Geocode.setLanguage("fr");
Geocode.setRegion("fr");

class Sells extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCoordinates(address) {}

  handleSubmit(event) {
    Geocode.fromAddress(document.getElementById("address").value).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;

        var vente = JSON.stringify({
          email: document.getElementById("email").value,
          name: document.getElementById("brand").value,
          description: document.getElementById("desc").value,
          price: document.getElementById("price").value,
          address: document.getElementById("address").value,
          lat: lat,
          lng: lng,
        });
        console.log(vente)
        axios.post('https://localhost:8000/v1/products', vente)
      }

    );
  }

  render() {
    return (
      <>
        <Form>
        <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleDesc">Votre email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="votreMail@youpi.com"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleLastName">Votre produit</Label>
                <Input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Nom de votre produit"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleDesc">Description</Label>
                <Input
                  type="text"
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
                  type="number"
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
                <Label for="exampleDesc">Taille</Label>
                <Input
                  type="text"
                  name="size"
                  id="size"
                  placeholder="Taille de votre materiel"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleVille">Ville</Label>
                <Input type="text" name="address" id="address" placeholder="Ville" />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={this.handleSubmit} >Mettre en vente</Button>
        </Form>
      </>
    );
  }
}

export default Sells;
