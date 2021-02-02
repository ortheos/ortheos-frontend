import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField} from '@material-ui/core';
//import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  lastGrid: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '40%',
    },
  },
}));

const Customization = props => {
  const { className, ...rest } = props;
  const classes = useStyles();



  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Rejoins-nous"
        subtitle="Renseignez vos coordonnées pour restez informé des nouveautés Ortheos"
      ctaGroup={[
       <Grid item xs={12}>
            <TextField
              placeholder=""
              label="email@example.com *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth

            />
          </Grid>
      ]}
      align="center"
      />

    </div>
  );
};

Customization.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Customization;
