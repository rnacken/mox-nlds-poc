import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxStack, stackStyleProps } from "./Stack";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";

const meta = {
  title: "React/Atoms/Layout/Stack",
  component: MoxStack,
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
} satisfies Meta<typeof MoxStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    as: "section",
  },
};
