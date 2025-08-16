// src/components/InputField/InputField.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "./InputField";

test("renders input with label", () => {
  render(<InputField label="Name" placeholder="Enter name" />);
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
});

test("shows error message when invalid", () => {
  render(<InputField label="Email" invalid errorMessage="Invalid email" />);
  expect(screen.getByText("Invalid email")).toBeInTheDocument();
});

test("toggles password visibility", () => {
  render(<InputField label="Password" type="password" />);
  const toggleButton = screen.getByRole("button");
  fireEvent.click(toggleButton);
  expect(screen.getByLabelText("Password")).toHaveAttribute("type", "text");
});
