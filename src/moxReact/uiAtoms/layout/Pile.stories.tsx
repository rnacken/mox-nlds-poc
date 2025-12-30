import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxPile } from "./Pile";

const meta = {
  title: "React/Atoms/Layout/Pile*",
  component: MoxPile,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: (
      <>
        <div>📦</div>
        <div>📦</div>
      </>
    ),
  },
} satisfies Meta<typeof MoxPile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    // as: "section",
  },
};
