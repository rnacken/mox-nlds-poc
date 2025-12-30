import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "MoxCSS/Atoms/Form/Checkbox",
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <input className="mox-atom-input-checkbox" type="checkbox" />
      Checkbox
    </label>
  ),
};
