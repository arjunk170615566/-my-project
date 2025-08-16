import type { Meta, StoryObj } from "@storybook/react";
import { InputField, InputFieldProps } from "./InputField";

const meta: Meta<InputFieldProps> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    type: {
      control: { type: "radio" },
      options: ["text", "password"],
    },
  },
};
export default meta;

type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email format",
    variant: "outlined",
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled field",
    placeholder: "Can't type here",
    disabled: true,
    variant: "outlined",
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    variant: "outlined",
  },
};
