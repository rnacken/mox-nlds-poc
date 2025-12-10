import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomBox } from "./Box";

const meta = {
  title: "Atoms/Layout/Box",
  component: MoxAtomBox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {},
  args: {
    inlineSize: "3xl",
    blockSize: "3xl",
    backgroundColor: "transparent",
    children: "📦",
    style: { border: "1px solid black", padding: "16px" },
  },
} satisfies Meta<typeof MoxAtomBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    as: "section",
  },
};

export const AsLink: Story = {
  args: {
    href: "#",
    as: "a",
  },
};
