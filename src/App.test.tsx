import React from 'react';
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "./App";

it("renders App", () => {
  const initialState = { gifs: [] };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText("Click here")).toBeTruthy();
});
