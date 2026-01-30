import type { Meta, StoryObj } from "@storybook/react";
import { IconFolder, IconHome } from "@tabler/icons-react";
import { SidebarPinnedButtons } from "./SidebarParts";

const meta: Meta<typeof SidebarPinnedButtons> = {
  title: "Components/Sidebar/PinnedButtons",
  component: SidebarPinnedButtons,
  args: {
    collapsed: false,
    actions: [
      { id: "home", icon: <IconHome size={18} />, label: "Home", disabled: true },
      { id: "data", icon: <IconFolder size={18} />, label: "Data Center" },
    ],
  },
  argTypes: {
    collapsed: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarPinnedButtons>;

export const Default: Story = {};
