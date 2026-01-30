import type { Meta, StoryObj } from "@storybook/react";
import { IconStar } from "@tabler/icons-react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    size: "m",
    variant: "primary"
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"]
    },
    size: {
      control: { type: "radio" },
      options: ["m", "l"]
    },
    block: { control: "boolean" },
    active: { control: "boolean" },
    disabled: { control: "boolean" }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    active: false,
    block: false,
    disabled: false
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    active: false,
    block: false,
    disabled: false
  }
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    active: false,
    block: false,
    disabled: false
  }
};

export const WithIcon: Story = {
  args: {
    icon: <IconStar size={16} />,
    children: "Button",
    variant: "primary",
    active: false,
    block: false,
    disabled: false
  }
};

export const WithCustomTextColor: Story = {
  args: {
    children: "Button",
    variant: "primary",
    textColor: "--ui2-content-secondary",
    active: false,
    block: false,
    disabled: false
  }
};
