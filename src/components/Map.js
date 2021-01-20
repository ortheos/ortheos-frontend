import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

import Marker from "./Marker";

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_HOST + "/v1/products")
      .then((response) => {
        this.setState({
          products: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {this.state.products.map((product) => (
            <Marker
              key={product.id}
              lat={product.user.lat}
              lng={product.user.lng}
              text={product.name}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
