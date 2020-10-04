import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

test("renders learn react link", () => {
  const { getByText } = render(<Button />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
