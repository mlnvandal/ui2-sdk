import { render, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("toggles collapsed state", () => {
    render(<Sidebar navItems={[{ id: "a", title: "Item", to: "/" }]} />);

    const root = document.querySelector('[data-ui2-component="Sidebar"]');
    expect(root).not.toBeNull();
    expect(root).toHaveAttribute("data-collapsed", "false");

    const toggle = document.querySelector('button[aria-label="Collapse"]');
    expect(toggle).not.toBeNull();
    fireEvent.click(toggle as Element);
    expect(root).toHaveAttribute("data-collapsed", "true");
  });
});
