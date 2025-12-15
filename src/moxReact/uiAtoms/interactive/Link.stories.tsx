import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomLink } from "./Link";

const meta = {
  title: "React/Atoms/Interactive/Link",
  component: MoxAtomLink,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "Click me!",
  },
} satisfies Meta<typeof MoxAtomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AsButton: Story = {
  args: {
    as: "button",
  },
};
