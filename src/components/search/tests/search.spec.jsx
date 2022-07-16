import React from "react";
import { shallow } from "enzyme";
import Search from "../search";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

test("should render Search component", () => {
  const wrapper = shallow(
    <Provider store={store}>
        <Search />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
