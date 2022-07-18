import React from 'react';
import { mount, shallow } from 'enzyme';
import SignUp from '../signUp';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe(' SignUp component', () => {
  it('renders default component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('mounts component', () => {
    mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
  });
});
