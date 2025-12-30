import type { Meta, StoryObj } from "@storybook/react-vite";
import { iconSet } from "../../moxIcons/icon-sets";
// import readme from "./default-icon-set.md?raw";

export function IconSet() {
  const iconIDs = Object.keys(iconSet).sort((a, b) => a.localeCompare(b));

  return (
    <div className="rhc-icon-set">
      {iconIDs.map((iconID) => (
        <div className="rhc-icon-set-item" key={iconID}>
          {/* <Icon icon={iconID}></Icon> */}
          <span>{iconID}</span>
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: "Icons",
  id: "mox-icons",
  component: IconSet,
  parameters: {
    // docs: {
    //   description: {
    //     component: mergeMarkdown([readme]),
    //   },
    // },
    status: {
      type: "UNSTABLE",
    },
  },
} satisfies Meta<typeof IconSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
