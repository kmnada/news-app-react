import React from 'react';
import Pagination from '@material-ui/core/Pagination';
import Stack from '@material-ui/core/Stack';

const PaginationComponent = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
    </Stack>
  );
};

export default PaginationComponent;