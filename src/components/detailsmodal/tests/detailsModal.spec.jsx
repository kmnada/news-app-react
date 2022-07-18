import React from 'react';
import { shallow } from 'enzyme';
import DetailsModal from '../detailsModal';

describe(' detailsModal component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<DetailsModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
