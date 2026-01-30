import type { Meta, StoryObj } from "@storybook/react";
import { IconStar } from "@tabler/icons-react";
import { SidebarNav, SidebarItem } from "./SidebarParts";

const meta: Meta<typeof SidebarNav> = {
  title: "Components/Sidebar/Nav",
  component: SidebarNav,
};

export default meta;

type Story = StoryObj<typeof SidebarNav>;

export const Default: Story = {
  render: () => (
    <SidebarNav>
      <SidebarItem icon={<IconStar size={18} />} label="Inventory" />
      <SidebarItem icon={<IconStar size={18} />} label="Replenishment" active />
    </SidebarNav>
  ),
};
