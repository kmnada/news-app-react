import React from 'react';
import { shallow } from 'enzyme';
import Stories from '../stories';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

test('should render Stories component', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Stories />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
