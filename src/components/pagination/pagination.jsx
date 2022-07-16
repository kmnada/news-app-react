import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';

const PaginationComponent = ({ count, handleChange, page }) => {
  const classes = useStyles();
  return (
    <Pagination
      count={count}
      onChange={handleChange}
      page={page}
      classes={{ root: classes.root }}
      variant="outlined"
      color="text.secondary"
    />
  );
};

export default PaginationComponent;
