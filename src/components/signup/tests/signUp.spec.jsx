import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../signUp';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

test('should render SignUp component', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
