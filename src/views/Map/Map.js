import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";

const useStyles = makeStyles((theme) => ({
  root: {},
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
}));

const Map = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_HOST + "v1/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}># of products: {items.length}</div>
      </Section>
    </div>
  );
};

export default Map;
