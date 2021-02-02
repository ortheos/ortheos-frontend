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
      
           <SectionHeader
            title={
              <span>
                <br />
                <Typography component="span" variant="inherit" color="primary">
                Une orthèse c'est quoi ? 
                <br />
                C’est un appareil orthopédique que l'on place sur une partie du corps déficiente afin d'assister celle-ci dans sa mobilité pendant la phase de rééducation. Une orthèse peut notamment être un corset, une attelle, etc...
                </Typography>
              </span>
            }       
            align="left"
            disableGutter
            titleVariant="h4"
          />
          <br />

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

                Prêt(e)s à donner une seconde vie à vos orthèses ?  
                <br />
                <Typography component="span" variant="inherit" color="primary">
                  Vendez les !
                </Typography>
              </span>
            }        
            subtitle="Vendez vos orthèses inutilisées à ceux qui en ont vraiment besoin. Mettez en ligne gratuitement vos produits plutôt que de vous en débarrasser !"
            ctaGroup={[
                   
              <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  href="https://ortheos.co/vente">
                Vendre
              </Button>,
               <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  href=" https://ortheos.umso.co/"
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
            src="/images/illustrations/ortheos1.png"
            alt="Ortheos"
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
