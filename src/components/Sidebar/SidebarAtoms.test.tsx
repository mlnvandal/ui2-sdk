import { render, screen } from "@testing-library/react";
import { SidebarNavButton } from "./SidebarAtoms";

describe("Sidebar atoms", () => {
  it("renders nav button label", () => {
    render(<SidebarNavButton label="Inventory" />);
    expect(screen.getByText("Inventory")).toBeInTheDocument();
  });
});
