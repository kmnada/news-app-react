import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import getTabName from '../../utils/GetTabName';

const routes = {
  0: '/home',
  1: '/world',
  2: '/science',
  3: '/search'
};

const TabsComponent = () => {
  const history = useHistory();
  const pathName = history?.location?.pathname;
  const tab = getTabName(pathName);
  const [value, setValue] = useState(tab ?? 0);

  const handleChange = (_event, tabValue) => {
    setValue(tabValue);
    history.push(routes[tabValue]);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'white', position: 'fixed', zIndex: 1, marginBottom: 10 }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Top News" value={0} />
        <Tab label="World" value={1} />
        <Tab label="Science" value={2} />
        <Tab label="Search" value={3} />
      </Tabs>
    </Box>
  );
};
export default TabsComponent;
