import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Typography, Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  divider: {
    background: 'black',
  },
}));

//you can get ride of theme if you dont need to take advantage of theme.whatever

const PageHeading = ({title}) => {
  const classes = useStyles ();
  return (
    <Fragment>
      <Typography variant="h1">{title}</Typography>
      <Divider className={classes.divider} />
    </Fragment>
  );
};

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeading;
