import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../pagination';

test('should render Pagination component', () => {
  const wrapper = shallow(<Pagination />);
  expect(wrapper).toMatchSnapshot();
});
