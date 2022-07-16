import React from 'react';
import { Typography } from '@material-ui/core';

const NoStories = ({ message }) => {
  return (
    <>
      <Typography variant="h4" component="h2" align="center">
        {message}
      </Typography>
      ;
    </>
  );
};

export default NoStories;
