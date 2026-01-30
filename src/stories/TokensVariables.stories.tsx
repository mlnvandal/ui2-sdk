import type { Meta, StoryObj } from "@storybook/react";
import { ColorTokenRow } from "./colorTokenHelpers";

const meta: Meta = {
  title: "Colors/Variables",
};

export default meta;

type Story = StoryObj;

const tokens = [
  "--ui2-content-inactive",
  "--ui2-content-primary",
  "--ui2-background-tertiary",
  "--ui2-state-focus",
  "--ui2-state-hover-inverse",
  "--ui2-background-tone-5",
  "--ui2-state-hover-lvl-1",
  "--ui2-background-primary",
  "--ui2-state-active",
  "--ui2-stroke-tertiary",
  "--ui2-background-accent-primary",
  "--ui2-background-primary-inverse",
  "--ui2-stroke-primary",
  "--ui2-content-secondary",
  "--ui2-state-hover-lvl-2",
  "--ui2-content-primary-inverse",
  "--ui2-content-secondary-inverse",
  "--ui2-stroke-tertiary-inverse",
  "--ui2-background-tone-3",
  "--ui2-background-accent-primary-shade",
  "--ui2-state-error",
  "--ui2-state-error-shade",
  "--ui2-state-warning",
  "--ui2-state-warning-shade",
  "--ui2-content-tertiary",
  "--ui2-stroke-secondary",
  "--ui2-state-success",
  "--ui2-state-success-shade",
  "--ui2-data-pine-forest",
  "--ui2-data-coral-blaze",
  "--ui2-data-dark-navy",
  "--ui2-data-lavender-mist",
  "--ui2-data-pine-forest-light",
  "--ui2-data-coral-blaze-shade",
  "--ui2-data-dark-navy-light",
  "--ui2-data-lavender-mist-light",
  "--ui2-content-tertiary-inverse",
  "--ui2-data-ember-rose",
  "--ui2-data-ember-rose-shade",
  "--ui2-data-pine-forest-shade",
  "--ui2-data-ember-rose-light",
  "--ui2-data-coral-blaze-light",
  "--ui2-data-desert-sunrise",
  "--ui2-data-desert-sunrise-light",
  "--ui2-data-desert-sunrise-shade",
  "--ui2-data-lavender-mist-shade",
  "--ui2-data-minted-lagoon",
  "--ui2-data-minted-lagoon-light",
  "--ui2-data-minted-lagoon-shade",
  "--ui2-data-ocean-breeze",
  "--ui2-data-ocean-breeze-light",
  "--ui2-data-ocean-breeze-shade",
  "--ui2-data-dark-navy-shade",
  "--ui2-data-blue-pulse",
  "--ui2-data-blue-pulse-light",
  "--ui2-data-blue-pulse-shade",
  "--ui2-data-mystic-violet",
  "--ui2-data-mystic-violet-light",
  "--ui2-data-mystic-violet-shade",
];

export const Default: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 720 }}>
      {tokens.map((name) => (
        <ColorTokenRow key={name} name={name} />
      ))}
    </div>
  ),
};
