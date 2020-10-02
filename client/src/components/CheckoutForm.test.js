import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  // Arrange
  render(<CheckoutForm />);

  // Act - Grab all fields, type in them, and hit submit button
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/Address/i);
  const cityInput = screen.getByLabelText(/City/i);
  const stateInput = screen.getByLabelText(/State/i);
  const zipInput = screen.getByLabelText(/Zip/i);
  const button = screen.getByTestId("submitCheckout");

  fireEvent.change(firstNameInput, {
    target: {
      name: "firstName",
      value: "dummyFirst",
    },
  });

  fireEvent.change(lastNameInput, {
    target: {
      name: "lastName",
      value: "dummyLast",
    },
  });

  fireEvent.change(addressInput, {
    target: {
      name: "address",
      value: "yayStreet",
    },
  });

  fireEvent.change(cityInput, {
    target: {
      name: "city",
      value: "yayCity",
    },
  });

  fireEvent.change(stateInput, {
    target: {
      name: "state",
      value: "yayState",
    },
  });

  fireEvent.change(zipInput, {
    target: {
      name: "zip",
      value: "99999",
    },
  });

  fireEvent.click(button);

  // Assert - Success Message ("Woo-hoo!")
  expect(screen.getByRole("woohoo")).toHaveTextContent("Woo-hoo!");
});
