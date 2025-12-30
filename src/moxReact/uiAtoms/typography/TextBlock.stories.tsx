import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  MoxAtomTextBlock,
  MoxTextBlock,
  textBlockStyleProps,
} from "./TextBlock";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";

const meta = {
  title: "React/Atoms/Typography/TextBlock",
  component: MoxAtomTextBlock,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "Sample text content",
  },
  argTypes: {
    children: { table: { disable: true } },
    ...getStylePropArgTypes(textBlockStyleProps),
  },
} satisfies Meta<typeof MoxAtomTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { borderBlock: "2px dashed orange" },
  },
};

export const FontSizeSmall: Story = {
  args: {
    fontSize: "sm",
  },
};

export const FontWeightBold: Story = {
  args: {
    fontWeight: "bold",
  },
};

export const LineHeightTight: Story = {
  args: {
    lineHeight: "tight",
    children:
      "This is some text with line height tight (1.3). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const LineHeightNormal: Story = {
  args: {
    lineHeight: "normal",
    children:
      "This is some text with line height normal (1.5). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const AsLabel: Story = {
  args: {
    as: "label",
  },
};

export const NestedTextBlocks: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This example shows how multiple TextBlock components can be nested, each with their own border for visual debugging. Do note that the text-trimming only happens once on the dotted lines. The line-height should not be messed up. The proper way to use text-blocks is *not* to nest them, but it works.",
      },
    },
  },
  args: {
    fontSize: "3xl",
    style: { borderBlock: "2px dashed orange" },
    children: (
      <MoxTextBlock fontSize="3xl">
        {"Some earlier text"}
        <MoxTextBlock fontSize="3xl">
          <MoxTextBlock
            as="span"
            fontSize="3xl"
            style={{ borderBlock: "2px solid blue" }}
          >{`Nested text content`}</MoxTextBlock>
        </MoxTextBlock>
      </MoxTextBlock>
    ),
  },
};
