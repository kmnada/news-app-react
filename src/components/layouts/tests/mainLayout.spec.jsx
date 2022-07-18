import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../mainlayout';

describe(' MainLayout component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<MainLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
