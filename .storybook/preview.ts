import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Intro",
          "Gebruik",
          "Atomic system",
          "Scaling system",
          "CSS: text-box trim",
          "Icons",
          "Atoms",
          "Molecules",
          "Organisms",
          "*",
        ],
      },
    },
    test: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "off",
    },
  },
};

export default preview;
