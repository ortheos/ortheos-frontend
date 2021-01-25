import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader} from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  placementGrid: {
    display: 'flex',
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`,
  },
  coverImage: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="/images/illustrations/ortheses.png"
            alt="..."
            className={classes.coverImage}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    Vous cherchez à vous procurer une orthèse rapidement et à petit prix ?
                    <br />
                    <Typography component="span" variant="inherit" color="primary">
                    Il vous faut une orthèse au plus vite ! 
                    </Typography>
                  </span>
                }
                subtitle="Que vous soyez blessé(e) ou que vous ressentiez une douleur importante, vos orthèses vous attendent sur Ortheos. Rendez-vous sur Ortheos pour trouver l’orthèse qui vous convient et qu’un particulier vous revendra à très bon prix."
                ctaGroup={[
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    href="http://localhost:3000/map"
                    >
                    Acheter
                  </Button>,

                   <Button
                      size="large"
                      variant="outlined"
                      color="primary"
                      href="https://app.umso.com/sites/gzrqy2wwqi6l"
                    >
                     Comment ça marche ?
                    </Button>,
                  
                ]}
                align="left"
                fadeUp
                disableGutter
                titleVariant="h3"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
