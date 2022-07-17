import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const NoStories = ({ message }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" align="center">
        {message}
      </Typography>
      ;
    </div>
  );
};

export default NoStories;
