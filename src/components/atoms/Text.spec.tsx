// eslint-disable-next-line no-use-before-define
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Text from "./Text";

describe("<Text>", () => {
  it("should render without crashing", () => {
    const { container } = render(<Text></Text>);
    return expect(container.firstChild).toBeTruthy();
  });
  it("renders text correctly", () => {
    const { getByTestId } = render(<Text>hoge</Text>);
    return expect(getByTestId("text")).toHaveTextContent("hoge");
  });
});
