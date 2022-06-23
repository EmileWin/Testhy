import React from 'react';
import { render } from "@testing-library/react";

import Gif from ".";
import { GifProps } from '../../interfaces';

it("renders Gif", () => {
  const props : GifProps = {
      gif: {
        url: "",
        id: "",
        index: "",
    }
  }
  const { getByText } = render(<Gif {...props} />);
  expect(getByText("Click to lock")).toBeTruthy();
});