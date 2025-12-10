import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomCheckbox } from "./Checkbox";

const meta = {
  title: "Atoms/Form/Checkbox",
  component: MoxAtomCheckbox,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof MoxAtomCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
