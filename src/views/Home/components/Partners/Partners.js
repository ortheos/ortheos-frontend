import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles( ({
  root: {},
  logo: {
    maxWidth: 50,
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  


  return (
    <div className={clsx(classes.root, className)} {...rest}>
   
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
