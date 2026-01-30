import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { IconFolder, IconHome, IconStar } from "@tabler/icons-react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    collapsed: false,
    account: { initials: "UI", name: "UI2", username: "Admin" },
    pinnedActions: [
      { id: "home", icon: <IconHome size={18} />, label: "Home" },
      { id: "data", icon: <IconFolder size={18} />, label: "Data Center" },
    ],
    navItems: Array.from({ length: 10 }, (_, index) => ({
      id: `section-${index + 1}`,
      title: `Section ${index + 1}`,
      icon: <IconStar size={18} />,
      children: Array.from({ length: 5 }, (_, childIndex) => ({
        title: `Subitem ${index + 1}.${childIndex + 1}`,
      })),
      defaultExpanded: index === 0,
    })),
    footer: { version: "0.0.0" },
  },
  argTypes: {
    collapsed: { control: "boolean" },
  },
  render: (args) => {
    const [collapsed, setCollapsed] = useState(args.collapsed ?? false);

    useEffect(() => {
      setCollapsed(args.collapsed ?? false);
    }, [args.collapsed]);

    return (
      <div style={{ display: "flex", minHeight: 480, background: "#ffffff" }}>
        <Sidebar
          {...args}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
        />
        <div style={{ padding: 24, flex: 1 }}>
          <h3>Content</h3>
          <p>Collapsed: {collapsed ? "yes" : "no"}</p>
        </div>
      </div>
    );
  },
};
