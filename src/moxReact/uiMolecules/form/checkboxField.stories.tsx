import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxMoleculeCheckboxField } from "./checkboxField";

const meta = {
  title: "Molecules/Form/CheckboxField",
  component: MoxMoleculeCheckboxField,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "Click me!",
  },
} satisfies Meta<typeof MoxMoleculeCheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxFieldAsSection: Story = {
  args: {
    // as: "section",
  },
};
