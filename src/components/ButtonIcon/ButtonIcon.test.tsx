import { render, screen } from "@testing-library/react";
import { ButtonIcon } from "./ButtonIcon";

describe("ButtonIcon", () => {
  it("renders icon button with aria-label", () => {
    render(
      <ButtonIcon aria-label="Toggle">
        <span>i</span>
      </ButtonIcon>,
    );
    expect(screen.getByLabelText("Toggle")).toBeInTheDocument();
  });

  it("applies custom text color variable", () => {
    render(
      <ButtonIcon aria-label="Toggle" textColor="--ui2-content-secondary">
        <span>i</span>
      </ButtonIcon>,
    );
    const button = screen.getByLabelText("Toggle");
    expect(button).toHaveStyle("--ui2-button-icon-text-color: var(--ui2-content-secondary)");
  });
});
