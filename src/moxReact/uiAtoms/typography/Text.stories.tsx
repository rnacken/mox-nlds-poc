import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomText } from "./Text";

const meta = {
  title: "React/Atoms/Typography/Text",
  component: MoxAtomText,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "Sample text content",
  },
} satisfies Meta<typeof MoxAtomText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AsLabel: Story = {
  args: {
    as: "label",
  },
};
