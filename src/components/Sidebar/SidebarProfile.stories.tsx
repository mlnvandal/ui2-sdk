import type { Meta, StoryObj } from "@storybook/react";
import { SidebarProfile } from "./SidebarParts";

const meta: Meta<typeof SidebarProfile> = {
  title: "Components/Sidebar/Profile",
  component: SidebarProfile,
  args: {
    initials: "OB",
    name: "UI2",
    username: "Admin",
    collapsed: false,
  },
  argTypes: {
    initials: { control: "text" },
    name: { control: "text" },
    username: { control: "text" },
    collapsed: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarProfile>;

export const Default: Story = {};
