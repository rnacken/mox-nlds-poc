import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomParagraph } from "./Paragraph";

const meta = {
  title: "React/Atoms/Typography/Paragraph (TextBlock)",
  component: MoxAtomParagraph,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "Sample text content",
  },
} satisfies Meta<typeof MoxAtomParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { borderBlock: "2px dotted orange" },
  },
};

export const OverrideFontSize: Story = {
  args: {
    fontSize: "sm",
  },
};
