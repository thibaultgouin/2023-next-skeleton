import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import M02Button from "./M02Button";

describe("M02Button", () => {
  it("renders without errors", () => {
    render(<M02Button />);
  });
});
