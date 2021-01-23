import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Pricings = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Aide"
        subtitle="Vous souhaitez nous contacter ?"
        ctaGroup={[
          <LearnMoreLink title="C'est par ici" href="#" variant="h6" />,
        ]}
        data-aos="fade-up"
      />
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Pricings;
