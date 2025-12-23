import "../src/moxCss/index.css";

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
          "React",
          ["Atoms", "Molecules", "Organisms", "*"],
        ],
        method: "alphabetical",
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
    docs: {
      codePanel: true,
      canvas: {
        // Show code by default.
        // Stories without concise code snippets can hide the code at Story level.
        sourceState: "shown",
      },
      source: {
        excludeDecorators: true,
      },
    },
  },
  decorators: [
    (Story) => {
      document.body.classList.add("mox-theme-1");
      // Optionally, remove the class when the story unmounts:
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
