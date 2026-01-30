import type { Meta, StoryObj } from "@storybook/react";
import { SidebarPopover } from "./SidebarParts";

const meta: Meta<typeof SidebarPopover> = {
  title: "Components/Sidebar/Popover",
  component: SidebarPopover,
  args: {
    title: "Inventory",
  },
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarPopover>;

export const Default: Story = {
  render: (args) => (
    <SidebarPopover {...args} style={{ position: "relative" }}>
      <div style={{ padding: 8, borderRadius: 8 }}>Locations</div>
      <div style={{ padding: 8, borderRadius: 8 }}>SKU</div>
    </SidebarPopover>
  ),
};
