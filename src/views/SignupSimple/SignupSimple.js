import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
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
}));

const SignupSimple = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Mettre en ligne une orthèse"
            subtitle="Veuillez compléter le formulaire ci-joint afin de mettre en ligne votre orthèse"
            titleProps={{
              variant: 'h3',
            }}
          />
          <Form />
        </div>
      </Section>
    </div>
  );
};

export default SignupSimple;
