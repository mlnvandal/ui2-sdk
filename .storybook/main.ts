import { type StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-links"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      plugins: [react()]
    });
  }
};

export default config;
