import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from '../login';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe(' Login component', () => {
  it('renders default component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('mounts component', () => {
    mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });
});
