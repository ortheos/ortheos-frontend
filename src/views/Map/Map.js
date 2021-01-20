import React, { useState, useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./map.css";

const Marker = ({ children }) => children;

const Map = () => {
  const mapRef = useRef();
  const [products, setProducts] = useState([]);
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_HOST + "v1/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setProducts(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const points = products.map((product) => ({
    type: "Feature",
    properties: {
      cluster: false,
      productId: product.id,
    },
    geometry: {
      type: "Point",
      coordinates: [product.user.lng, product.user.lat],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
        defaultZoom={1}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`product-${cluster.properties.productId}`}
              lat={latitude}
              lng={longitude}
            >
              <button className="product-marker">
                <img src="marker.svg" alt="product" />
              </button>
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
