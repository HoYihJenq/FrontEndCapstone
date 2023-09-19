import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Hero from "../components/Hero";
import Booking from "../pages/Booking";

test("whether have the word Chicago", () => {
  render(<Hero />);
  const theWord = screen.getByText("Chicago");
  expect(theWord).toBeInTheDocument();
});

test("Renders the Booking heading", () => {
  render(<Booking />);
  const headingElement = screen.getByText("Book Now", { exact: false });
  expect(headingElement).toBeInTheDocument();
});

test("Failed test-after userEvent.click, should check for something that changes", () => {
  render(<Booking />);
  const submitClick = screen.getByTestId("test-submit");
  userEvent.click(submitClick);

  const outputElement = screen.getByText("Submit");
  expect(outputElement).toBeInTheDocument();
});
