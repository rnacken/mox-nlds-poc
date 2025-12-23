import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomPageLead } from "./PageLead";

const meta = {
  title: "React/Atoms/Typography/Page Lead (TextBlock)",
  component: MoxAtomPageLead,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "Sample text content",
  },
} satisfies Meta<typeof MoxAtomPageLead>;

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
