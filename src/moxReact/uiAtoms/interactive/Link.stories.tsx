import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomLink } from "./Link";
import { MoxTextBlock } from "../typography/TextBlock";

const meta = {
  title: "React/Atoms/Interactive/Link",
  component: MoxAtomLink,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: <MoxTextBlock>Click me!</MoxTextBlock>,
  },
} satisfies Meta<typeof MoxAtomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    underline: "none",
    underlineHover: "underline",
  },
};

export const InlineText: Story = {
  args: {
    underline: "underline",
    underlineHover: "none",
  },
};

export const AsButton: Story = {
  args: {
    as: "button",
  },
};
