import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Save</Button>);
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    render(<Button icon={<span data-testid="icon" />}>Save</Button>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies custom text color variable", () => {
    render(<Button textColor="--ui2-content-secondary">Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveStyle("--ui2-button-text-color: var(--ui2-content-secondary)");
  });

  it("sets disabled on native button", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: "Disabled" });
    expect(button).toBeDisabled();
  });
});
