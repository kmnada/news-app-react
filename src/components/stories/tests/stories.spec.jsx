import React from 'react';
import { shallow, mount } from 'enzyme';
import Stories from '../stories';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    location: {
      pathname: '/topstories'
    }
  })
}));

describe(' Stories component', () => {
  it('renders default component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Stories />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('mounts and unmounts the component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Stories />
      </Provider>
    );
    wrapper.unmount();
  });
});
