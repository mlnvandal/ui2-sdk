import type { Meta, StoryObj } from "@storybook/react";
import { IconChevronsLeft } from "@tabler/icons-react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { SidebarFooter } from "./SidebarParts";

const meta: Meta<typeof SidebarFooter> = {
  title: "Components/Sidebar/Footer",
  component: SidebarFooter,
  args: {
    collapsed: false,
    version: "0.0.0",
    logo: <div style={{ width: 100, height: 24, background: "#ddd" }} />,
    toggle: (
      <ButtonIcon aria-label="Collapse" variant="tertiary">
        <IconChevronsLeft size={18} />
      </ButtonIcon>
    ),
  },
  argTypes: {
    collapsed: { control: "boolean" },
    version: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarFooter>;

export const Default: Story = {};
