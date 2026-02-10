import { spaces } from "../configOptions";
import { mapOptionsToCSSVars } from "../helpers/mapOptionsToCSSVars";
import { type MoxConfigProps } from "../mox.config";

const css = String.raw;

export const textProps = {
  fontSize: {
    options: mapOptionsToCSSVars(spaces, ["--current-font-size"], "space"),
    responsive: true,
  },
  color: {
    options: {
      primary: css`
        --text-color: var(--mox-color-primary);
        color: var(--text-color);
      `,
      secondary: css`
        --text-color: var(--mox-color-secondary);
        color: var(--text-color);
      `,
      tertiary: css`
        --text-color: var(-mox-color-tertiary);
        color: var(--text-color);
      `,
      error: css`
        --text-color: var(--mox-color-error);
        color: var(--text-color);
      `,
      warning: css`
        --text-color: var(--mox-color-warning);
        color: var(--text-color);
      `,
      success: css`
        --text-color: var(--mox-color-success);
        color: var(--text-color);
      `,
      info: css`
        --text-color: var(--mox-color-info);
        color: var(--text-color);
      `,
      inherit: css`
        --text-color: inherit;
        color: var(--text-color);
      `,
    },
  },
  colorHover: {
    options: {
      primary: css`
        --text-color-hover: var(--mox-color-primary);
        color: var(--text-color-hover);
      `,
      secondary: css`
        --text-color-hover: var(--mox-color-secondary);
        color: var(--text-color-hover);
      `,
      tertiary: css`
        --text-color-hover: var(--mox-color-tertiary);
        color: var(--text-color-hover);
      `,
      error: css`
        --text-color-hover: var(--mox-color-error);
        color: var(--text-color-hover);
      `,
      warning: css`
        --text-color-hover: var(--mox-color-warning);
        color: var(--text-color-hover);
      `,
      success: css`
        --text-color-hover: var(--mox-color-success);
        color: var(--text-color-hover);
      `,
      info: css`
        --text-color-hover: var(--mox-color-info);
        color: var(--text-color-hover);
      `,
      inherit: css`
        --text-color-hover: inherit;
        color: var(--text-color-hover);
      `,
    },
    state: "hover",
  },
  fontWeight: {
    options: {
      light: css`
        font-weight: 300;
      `,
      normal: css`
        font-weight: 400;
      `,
      medium: css`
        font-weight: 500;
      `,
      bold: css`
        font-weight: 700;
      `,
    },
  },
  lineHeight: {
    options: {
      normal: css`
        line-height: 1.5;
      `,
      tight: css`
        line-height: 1.3;
      `,
    },
  },
} as const satisfies MoxConfigProps;
