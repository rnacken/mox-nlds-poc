import type { MoxConfigProps } from "../mox.config";

export const textProps = {
  color: {
    options: {
      primary: { "--text-color": "var(--color-primary)" },
      secondary: { "--text-color": "var(--color-secondary)" },
      tertiary: { "--text-color": "var(--color-tertiary)" },
      error: { "--text-color": "var(--color-error)" },
      warning: { "--text-color": "var(--color-warning)" },
      success: { "--text-color": "var(--color-success)" },
      info: { "--text-color": "var(--color-info)" },
      inherit: { "--text-color": "inherit" },
    },
  },
  colorHover: {
    options: {
      primary: { "--text-color-hover": "var(--color-primary)" },
      secondary: { "--text-color-hover": "var(--color-secondary)" },
      tertiary: { "--text-color-hover": "var(--color-tertiary)" },
      error: { "--text-color-hover": "var(--color-error)" },
      warning: { "--text-color-hover": "var(--color-warning)" },
      success: { "--text-color-hover": "var(--color-success)" },
      info: { "--text-color-hover": "var(--color-info)" },
      inherit: { "--text-color-hover": "inherit" },
    },
    state: "hover",
  },
  fontWeight: {
    options: {
      light: { "font-weight": "300" },
      normal: { "font-weight": "400" },
      medium: { "font-weight": "500" },
      bold: { "font-weight": "700" },
    },
  },
  lineHeight: {
    options: {
      normal: { "line-height": "normal" },
      relaxed: { "line-height": "1.5" },
      snug: { "line-height": "1.375" },
      tight: { "line-height": "1.25" },
    },
  },
} as const satisfies MoxConfigProps;
