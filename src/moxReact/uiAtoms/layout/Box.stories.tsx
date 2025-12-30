import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomBox, boxStyleProps } from "./Box";
import { MoxTextBlock } from "../typography/TextBlock";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";

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
    borderColor: "black",
    borderWidth: "2px",
    borderStyle: "dashed",
  },
  argTypes: {
    children: { table: { disable: true } },
    ...getStylePropArgTypes(boxStyleProps),
  },
} satisfies Meta<typeof MoxAtomBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackgroundColor: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The text color will be set to a contrast version of the selected background-color to make sure the contrast is enough.",
      },
    },
  },
  args: {
    borderStyle: "none",
    backgroundColor: "primary",
    size: "auto",
    padding: "2xs",
    children: <MoxTextBlock>{"I am a box!"}</MoxTextBlock>,
  },
};

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
