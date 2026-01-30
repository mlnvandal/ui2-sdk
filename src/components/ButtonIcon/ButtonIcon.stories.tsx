import type { Meta, StoryObj } from "@storybook/react";
import { IconChevronDown, IconX } from "@tabler/icons-react";
import { ButtonIcon } from "./ButtonIcon";

const meta: Meta<typeof ButtonIcon> = {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  args: {
    children: <IconChevronDown size={18} />,
    "aria-label": "Toggle",
    size: "m",
    variant: "primary",
    disabled: false,
    active: false,
  },
  argTypes: {
    size: { control: "inline-radio", options: ["xs", "s", "m", "l"] },
    variant: { control: "inline-radio", options: ["primary", "secondary", "tertiary", "inverted"] },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Primary: Story = {
  args: {
    variant: "primary",
    active: false,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    active: false,
    disabled: false,
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    active: false,
    disabled: false,
  },
};

export const WithCustomTextColor: Story = {
  args: {
    variant: "primary",
    textColor: "--ui2-content-secondary",
  },
};
