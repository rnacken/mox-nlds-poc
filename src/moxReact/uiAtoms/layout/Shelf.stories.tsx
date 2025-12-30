import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxShelf } from "./Shelf";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { stackStyleProps } from "./Stack";

const meta = {
  title: "React/Atoms/Layout/Shelf",
  component: MoxShelf,
  tags: ["autodocs"],
  parameters: {},
  args: {
    gap: "md",
    children: (
      <>
        <div>📦</div>
        <div>📦</div>
      </>
    ),
  },
  argTypes: getStylePropArgTypes(stackStyleProps),
} satisfies Meta<typeof MoxShelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    // as: "section",
  },
};
