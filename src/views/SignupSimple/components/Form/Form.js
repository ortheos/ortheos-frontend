import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import validate from "validate.js";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage("fr");
Geocode.setRegion("fr");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 300,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120,
    },
  },
  productName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8,
    },
  },
  productDescription: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8,
    },
  },
  price: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 1,
    },
  },
  size: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 1,
    },
  },
  address: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8,
    },
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Geocode.fromAddress(formState.values.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const body = JSON.stringify({
          ...formState.values,
          lat: lat,
          lng: lng,
        });
        fetch(process.env.REACT_APP_API_HOST + "v1/products", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: body,
        });
      },
      (error) => {
        console.log(error);
      }
    );

    if (formState.isValid) {
      window.location.replace("/");
    }

    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="Prénom"
              label="Prénom *"
              variant="outlined"
              size="medium"
              name="firstName"
              fullWidth
              helperText={
                hasError("firstName") ? formState.errors.firstName[0] : null
              }
              error={hasError("firstName")}
              onChange={handleChange}
              type="firstName"
              value={formState.values.firstName || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Nom de famille"
              label="Nom de famille *"
              variant="outlined"
              size="medium"
              name="lastName"
              fullWidth
              helperText={
                hasError("lastName") ? formState.errors.lastName[0] : null
              }
              error={hasError("lastName")}
              onChange={handleChange}
              type="lastName"
              value={formState.values.lastName || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError("email") ? formState.errors.email[0] : null}
              error={hasError("email")}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Nom du produit"
              label="Nom du produit *"
              variant="outlined"
              size="medium"
              name="productName"
              fullWidth
              helperText={
                hasError("productName") ? formState.errors.productName[0] : null
              }
              error={hasError("productName")}
              onChange={handleChange}
              type="text"
              value={formState.values.productName || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Description du produit"
              label="Description du produit *"
              variant="outlined"
              size="medium"
              name="productDescription"
              fullWidth
              helperText={
                hasError("productDescription")
                  ? formState.errors.productDescription[0]
                  : null
              }
              error={hasError("productDescription")}
              onChange={handleChange}
              type="text"
              value={formState.values.productDescription || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Taille"
              label="Taille *"
              variant="outlined"
              size="medium"
              name="size"
              fullWidth
              helperText={hasError("size") ? formState.errors.size[0] : null}
              error={hasError("size")}
              onChange={handleChange}
              type="text"
              value={formState.values.size || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Prix"
              label="Prix *"
              variant="outlined"
              size="medium"
              name="price"
              fullWidth
              helperText={hasError("price") ? formState.errors.price[0] : null}
              error={hasError("price")}
              onChange={handleChange}
              type="double"
              value={formState.values.price || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Adresse"
              label="Adresse *"
              variant="outlined"
              size="medium"
              name="address"
              fullWidth
              helperText={
                hasError("address")
                  ? formState.errors.address[0]
                  : null
              }
              error={hasError("address")}
              onChange={handleChange}
              type="text"
              value={formState.values.address || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
