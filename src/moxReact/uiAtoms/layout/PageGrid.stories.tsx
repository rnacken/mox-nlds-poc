import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxPageGrid } from "./PageGrid";
import { MoxBox } from "./Box";

const meta = {
  title: "React/Atoms/Layout/PageGrid",
  component: MoxPageGrid,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: (
      <MoxBox
        style={{ gridColumn: "page" }}
        borderColor={"black"}
        borderWidth={"1px"}
        borderStyle={"dashed"}
        paddingBlock={"lg"}
      >
        📦
      </MoxBox>
    ),
    style: {},
  },
} satisfies Meta<typeof MoxPageGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsSection: Story = {
  args: {
    // as: "section",
  },
};
