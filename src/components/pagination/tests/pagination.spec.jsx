import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../pagination';

describe(' Pagination component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper).toMatchSnapshot();
  });
});
