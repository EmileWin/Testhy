import React from 'react';
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Header from ".";

it("renders Header", () => {
  const initialState = { gifs: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const { getByText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  expect(getByText("spacebar")).toBeTruthy();
  expect(getByText("Click here")).toBeTruthy();
});
