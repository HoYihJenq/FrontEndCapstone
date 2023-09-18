import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";

import Hero from "../components/Hero";

test("whether have the word Chicago", () => {
  render(<Hero />);
  const theWord = screen.getByText("Chicago");
  expect(theWord).toBeInTheDocument();
});
