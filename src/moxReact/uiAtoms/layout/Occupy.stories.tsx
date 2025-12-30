import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxOccupy } from "./Occupy";

const meta = {
  title: "React/Atoms/Layout/Occupy*",
  component: MoxOccupy,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: (
      <>
        <div>📦</div>
      </>
    ),
  },
} satisfies Meta<typeof MoxOccupy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    // as: "section",
  },
};
