import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomHeading } from "./Heading";

const meta = {
  title: "React/Atoms/Typography/Heading (TextBlock)",
  component: MoxAtomHeading,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "Sample text content",
  },
} satisfies Meta<typeof MoxAtomHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
    style: { borderBlock: "2px dotted orange" },
  },
};

export const Heading1: Story = {
  args: {
    level: 1,
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
  },
};
export const Heading4: Story = {
  args: {
    level: 4,
  },
};
export const Heading5: Story = {
  args: {
    level: 5,
  },
};
export const Heading6: Story = {
  args: {
    level: 6,
  },
};
export const DifferentSizeLevel: Story = {
  args: {
    level: 1,
    sizeLevel: 3,
  },
};
export const OverrideFontSize: Story = {
  args: {
    level: 1,
    fontSize: "sm",
  },
};
