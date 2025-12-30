import type { Meta, StoryObj } from "@storybook/react-vite";
import { MoxMoleculeRadioButtonField } from "./RadioButtonField";

const meta = {
  title: "React/Molecules/Form/RadioButtonField",
  component: MoxMoleculeRadioButtonField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: `
---

<details>
<summary>**How this component is built**</summary>

\`\`\`tsx
<MoxAtomShelf gap="md" alignItems="start">
  <MoxAtomRadioButton id={id} />
  <MoxTextBlock as="label" htmlFor={id}>{children}</MoxTextBlock>
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
} satisfies Meta<typeof MoxMoleculeRadioButtonField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButtonFieldDefault: Story = {
  args: {},
};
