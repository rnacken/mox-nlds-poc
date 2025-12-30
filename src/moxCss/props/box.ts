import type { MoxConfigProps } from "../mox.config";

const borderRadiusOptions = {
  "0": { "border-radius": "0" },
  "1px": { "border-radius": "1px" },
  "2px": { "border-radius": "2px" },
  "4px": { "border-radius": "4px" },
  "8px": { "border-radius": "8px" },
  circle: { "border-radius": "50%" },
} as const;

const getSingleBorderRadiusOptions = (
  position: "start-start" | "start-end" | "end-start" | "end-end"
) => {
  return {
    ...borderRadiusOptions,
    "lint-0.25": {
      [`border-${position}-radius`]: "calc(0.25 * var(--mox-lint-inline-size))",
    },
    "lint-0.5": {
      [`border-${position}-radius`]: "calc(0.5 * var(--mox-lint-inline-size))",
    },
    "lint-1": {
      [`border-${position}-radius`]: "calc(1 * var(--mox-lint-inline-size))",
    },
    "lint-2": {
      [`border-${position}-radius`]: "calc(2 * var(--mox-lint-inline-size))",
    },
    "lint-4": {
      [`border-${position}-radius`]: "calc(4 * var(--mox-lint-inline-size))",
    },
    "lint-8": {
      [`border-${position}-radius`]: "calc(8 * var(--mox-lint-inline-size))",
    },
  };
};

export const boxProps = {
  borderRadius: {
    options: borderRadiusOptions,
    responsive: true,
  },
  borderStartStartRadius: {
    options: getSingleBorderRadiusOptions("start-start"),
    responsive: true,
  },
  borderStartEndRadius: {
    options: getSingleBorderRadiusOptions("start-end"),
    responsive: true,
  },
  borderEndStartRadius: {
    options: getSingleBorderRadiusOptions("end-start"),
    responsive: true,
  },
  borderEndEndRadius: {
    options: getSingleBorderRadiusOptions("end-end"),
    responsive: true,
  },
  borderWidth: {
    options: {
      "0": { "border-width": "0" },
      "1px": { "border-width": "1px" },
      "2px": { "border-width": "2px" },
      "4px": { "border-width": "4px" },
      "8px": { "border-width": "8px" },
    },
  },
  borderColor: {
    options: {
      transparent: { "border-color": "transparent" },
      primary: {
        "border-color": "var(--mox-color-primary)",
      },
      secondary: {
        "border-color": "var(--mox-color-secondary)",
      },
      subtle: {
        "border-color": "var(--mox-color-subtle)",
      },
      muted: {
        "border-color": "var(--mox-color-muted)",
      },
      black: { "border-color": "black" },
      white: { "border-color": "white" },
    },
  },
  borderStyle: {
    options: {
      solid: { "border-style": "solid" },
      dashed: { "border-style": "dashed" },
      dotted: { "border-style": "dotted" },
      none: { "border-style": "none" },
    },
  },
  backgroundColor: {
    options: {
      transparent: { "background-color": "transparent" },
      primary: {
        "background-color": "var(--mox-color-primary)",
        "--mox-text-color": "var(--mox-color-primary-contrast)",
      },
      secondary: {
        "background-color": "var(--mox-color-secondary)",
        "--mox-text-color": "var(--mox-color-secondary-contrast)",
      },
      subtle: {
        "background-color": "var(--mox-color-subtle)",
        "--mox-text-color": "var(--mox-color-subtle-contrast)",
      },
      muted: {
        "background-color": "var(--mox-color-muted)",
        "--mox-text-color": "var(--mox-color-muted-contrast)",
      },
      black: {
        "background-color": "black",
        "--mox-text-color": "var(--mox-color-black-contrast)",
      },
      white: {
        "background-color": "white",
        "--mox-text-color": "var(--mox-color-white-contrast)",
      },
    },
  },
  gridColumn: {
    options: {
      window: { "grid-column": "window" },
      page: { "grid-column": "page" },
    },
    responsive: true,
  },
  gridColumnStart: {
    options: {
      windowStart: { "grid-column-start": "window-start" },
      pageStart: { "grid-column-start": "page-start" },
      pageEnd: { "grid-column-start": "page-end" },
      windowEnd: { "grid-column-start": "window-end" },
    },
    responsive: true,
  },
  gridColumnEnd: {
    options: {
      windowStart: { "grid-column-end": "window-start" },
      pageStart: { "grid-column-end": "page-start" },
      windowEnd: { "grid-column-end": "window-end" },
      pageEnd: { "grid-column-end": "page-end" },
    },
    responsive: true,
  },
} as const satisfies MoxConfigProps;
