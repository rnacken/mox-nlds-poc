import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomLink } from "./Link";
import { MoxTextBlock } from "../typography/TextBlock";
import { MoxBox } from "../layout/Box";

const meta = {
  title: "React/Atoms/Interactive/Link",
  component: MoxAtomLink,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: <MoxTextBlock>Click me!</MoxTextBlock>,
  },
  argTypes: {
    children: { table: { disable: true } },
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

export const LinkBox: Story = {
  args: {
    underline: "underline",
    underlineHover: "none",
    children: (
      <MoxBox
        padding="xl"
        borderColor="zwart"
        borderStyle={"dashed"}
        borderWidth={"2px"}
      >
        <MoxTextBlock>I am a link box</MoxTextBlock>
      </MoxBox>
    ),
  },
};

export const AsButton: Story = {
  args: {
    as: "button",
    type: "button",
    onClick: () => alert("Link as button clicked!"),
  },
};
