import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxMoleculeCheckboxField } from "./CheckboxField";

const meta = {
  title: "React/Molecules/Form/CheckboxField",
  component: MoxMoleculeCheckboxField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: `
---

<details>
<summary>**How this component is built**</summary>

\`\`\`tsx
<MoxAtomShelf>
  <MoxAtomCheckbox id={id} />
  <label htmlFor={id}>{children}</label>
</MoxAtomShelf>
\`\`\`

</details>
        `,
      },
    },
  },
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
