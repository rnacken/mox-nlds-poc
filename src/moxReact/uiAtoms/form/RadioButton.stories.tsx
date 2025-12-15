import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomRadioButton } from "./RadioButton";

const meta = {
  title: "React/Atoms/Form/RadioButton",
  component: MoxAtomRadioButton,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof MoxAtomRadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
