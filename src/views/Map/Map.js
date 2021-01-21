import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const getInfoWindowString = (product) => `
    <div>
      <div style="font-size: 16px;">
        ${product.name}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${product.description}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${product.price} €
      </div>
      <a href="/buy?productId=${product.id}" style="font-size: 14px;">
        Commander ce produit
      </a>
    </div>`;

const handleApiLoaded = (map, maps) => {
  fetch(process.env.REACT_APP_API_HOST + "v1/products")
    .then((res) => res.json())
    .then(
      (result) => {
        const products = result.result;
        const markers = [];
        const infowindows = [];

        products.forEach((product) => {
          markers.push(
            new maps.Marker({
              position: {
                lat: product.user.lat,
                lng: product.user.lng,
              },
              map,
            })
          );

          infowindows.push(
            new maps.InfoWindow({
              content: getInfoWindowString(product),
            })
          );
        });

        markers.forEach((marker, i) => {
          marker.addListener("click", () => {
            infowindows[i].open(map, marker);
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
};

const Map = () => {
  const [lat, setLat] = useState(48.8566);
  const [lng, setLng] = useState(2.3522);

  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        center={{ lat: lat, lng: lng }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      />
    </div>
  );
};

export default Map;
