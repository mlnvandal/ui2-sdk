import { render, screen } from "@testing-library/react";
import { SidebarIconButton, SidebarItem, SidebarNav, SidebarPopover, SidebarProfile } from "./SidebarParts";

describe("Sidebar parts", () => {
  it("renders profile name", () => {
    render(<SidebarProfile initials="UI" name="UI2" username="Admin" />);
    expect(screen.getByText("UI2")).toBeInTheDocument();
  });

  it("renders item label", () => {
    render(<SidebarItem label="Inventory" showIcon={false} />);
    expect(screen.getByText("Inventory")).toBeInTheDocument();
  });

  it("renders popover title", () => {
    render(
      <SidebarPopover title="Inventory">
        <div>Child</div>
      </SidebarPopover>,
    );
    expect(screen.getByText("Inventory")).toBeInTheDocument();
  });

  it("renders nav children", () => {
    render(
      <SidebarNav>
        <SidebarItem label="Inventory" />
      </SidebarNav>,
    );
    expect(screen.getByText("Inventory")).toBeInTheDocument();
  });

  it("renders icon button label", () => {
    render(<SidebarIconButton icon={<span />} label="Collapse" />);
    expect(screen.getByLabelText("Collapse")).toBeInTheDocument();
  });
});
