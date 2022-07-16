import React from "react";
import { shallow } from "enzyme";
import Login from "../login";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

test("should render Login component", () => {
  const wrapper = shallow(
    <Provider store={store}>
        <Login />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
