import React from 'react';
import { shallow } from 'enzyme';
import TabsComponent from '../tabs';

test('should render Tabs component', () => {
  const wrapper = shallow(<TabsComponent />);
  expect(wrapper).toMatchSnapshot();
});
