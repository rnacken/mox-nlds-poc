import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxShelf } from "./Shelf";

const meta = {
  title: "React/Atoms/Layout/Shelf",
  component: MoxShelf,
  tags: ["autodocs"],
  parameters: {},
  args: {
    gap: "md",
    children: (
      <>
        <div>📦</div>
        <div>📦</div>
      </>
    ),
  },
} satisfies Meta<typeof MoxShelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    // as: "section",
  },
};
