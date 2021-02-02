import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';


const useStyles = makeStyles(theme => ({
  root: {},
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

const Remerciements = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            //label=""
            title="Votre commande a été validée."
            subtitle={
              <span>
                Merci d'avoir effectué vos achats avec nous !{' '}
              </span>
            }
            titleProps={{
              variant: 'h3',
            }}
            labelProps={{
              color: 'secondary',
              className: classes.label,
              variant: 'h5',
            }}
            ctaGroup={[
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleClick}
                href="/"
              >
              Accueil
              </Button>,
            ]}
            disableGutter
          />
        </div>
      </Section>
    </div>
  );
};

export default Remerciements;