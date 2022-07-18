import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';

describe(' Header component', () => {
  it('renders default component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
