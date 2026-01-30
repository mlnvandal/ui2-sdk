import type { Meta, StoryObj } from "@storybook/react";
import { IconChevronDown, IconStar } from "@tabler/icons-react";
import { SidebarItem } from "./SidebarParts";

const meta: Meta<typeof SidebarItem> = {
  title: "Components/Sidebar/Item",
  component: SidebarItem,
  args: {
    label: "Inventory",
    compact: false,
    active: false,
    disabled: false,
    icon: <IconStar size={18} />,
    showIcon: true,
    chevron: <IconChevronDown size={16} />,
  },
  argTypes: {
    label: { control: "text" },
    compact: { control: "boolean" },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {};

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    icon: undefined,
  },
};
