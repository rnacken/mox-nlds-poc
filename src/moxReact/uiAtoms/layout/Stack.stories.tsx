import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxStack } from "./Stack";

const meta = {
  title: "Atoms/Layout/Stack",
  component: MoxStack,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: (
      <>
        <MoxStack>📦</MoxStack>
        <MoxStack>📦</MoxStack>
      </>
    ),
  },
} satisfies Meta<typeof MoxStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    // as: "section",
  },
};
