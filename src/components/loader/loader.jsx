import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { useStyles } from './styles';

const Loader = () => {
  const classes = useStyles();
  return (
    <Box sx={{ display: 'flex' }} className={classes.loader}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;