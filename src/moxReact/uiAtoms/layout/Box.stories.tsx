import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomBox } from "./Box";

const meta = {
  title: "React/Atoms/Layout/Box",
  component: MoxAtomBox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "📦",
    size: "4xl",
    padding: "md",
    style: { border: "1px solid black" },
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
