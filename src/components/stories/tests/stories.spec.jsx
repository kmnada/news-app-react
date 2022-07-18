import React from 'react';
import { shallow } from 'enzyme';
import Stories from '../stories';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe(' Stories component', () => {
  it('renders default component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Stories />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
