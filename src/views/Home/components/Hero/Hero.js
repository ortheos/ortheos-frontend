import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
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
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
                Prêts à donner une seconde vie à vos orthèses ?  
                <br />
                <Typography component="span" variant="inherit" color="primary">
                  Vendez les !
                </Typography>
              </span>
            }        
            subtitle="Vendez vos orthèses inutilisées à ceux qui en ont vraiment besoin. Mettez en ligne gratuitement vos produits plutôt que de vous en débarrasser !"
            ctaGroup={[
              <Button variant="contained" color="primary" size="large">
                Vendre
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
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="/images/illustrations/medical-home.png"
            alt="TheFront Company"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
