import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxColumns } from "./Columns";

const meta = {
  title: "Atoms/Layout/Columns",
  component: MoxColumns,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: (
      <>
        <MoxColumns>📦</MoxColumns>
        <MoxColumns>📦</MoxColumns>
      </>
    ),
  },
} satisfies Meta<typeof MoxColumns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    // as: "section",
  },
};
