import type { MoxConfigProps } from "../mox.config";

export const linkProps = {
  underline: {
    options: {
      underline: { "text-decoration": "underline" },
      strikethrough: { "text-decoration": "line-through" },
      none: { "text-decoration": "none" },
    },
  },
  underlineHover: {
    options: {
      underline: { "text-decoration": "underline" },
      strikethrough: { "text-decoration": "line-through" },
      none: { "text-decoration": "none" },
    },
    state: "hover",
  },
} as const satisfies MoxConfigProps;
