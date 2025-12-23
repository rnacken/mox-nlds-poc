import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomTextBlock } from "./TextBlock";

const meta = {
  title: "React/Atoms/Typography/TextBlock",
  component: MoxAtomTextBlock,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "Sample text content",
  },
} satisfies Meta<typeof MoxAtomTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { borderBlock: "2px dotted orange" },
  },
};

export const FontSizeSmall: Story = {
  args: {
    fontSize: "sm",
  },
};

export const AsLabel: Story = {
  args: {
    as: "label",
  },
};
