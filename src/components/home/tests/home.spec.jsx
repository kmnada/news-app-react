import React from 'react';
import { shallow } from 'enzyme';
import Home from '../home';

describe(' Home component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
