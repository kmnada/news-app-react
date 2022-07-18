import React from 'react';
import { shallow } from 'enzyme';
import TabsComponent from '../tabs';

describe(' Tabs component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<TabsComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
