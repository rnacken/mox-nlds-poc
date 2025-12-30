/**
 * MOX CSS Configuration File
 *
 * Contains the settings to be used for calculating & generating the css files in `_generated`:
 * - spaces: all clamp-values for spacing for each space-key (e.g., xs, sm, md, lg, xl)
 * - responsive: all css-classes that should be generated for responsive design
 *
 */

import { flexProps } from "./props/flex";
import { linkProps } from "./props/link";
import { textProps } from "./props/text";

const prefix = "mox";

// Unfortunately, at the moment it's not possible to define these values with `css vars` - a media/container-query can be defined before any vars are available.
const viewportBreakpoints = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
  mq1440: 1440,
} as const;

const containerBreakpoints = {
  cq200: 200,
  cq400: 400,
  cq600: 600,
} as const;

// We export the spaces so it can be used to generate clamp-spaces in `generateCss.ts`
export const spaces = [
  "4xs",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
] as const;

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

/**
 * Maps CSS class options to their corresponding CSS variable names.
 * e.g. `{ 'md': 'var(--mox-space-md)', ... }`
 *
 * @param options - The array of CSS class options.
 * @param cssProps - The CSS properties to map.
 * @param varName - The base name of the CSS variable.
 */
const mapOptionsToCSSVars = <O extends string>(
  options: ReadonlyArray<O>,
  cssProps: Array<string>,
  varName: string
) => {
  const mappedOptions = {} as Record<O, Record<string, string>>;
  for (const option of options) {
    const result = cssProps.reduce((acc, cssProp) => {
      acc[cssProp] = `var(--${prefix}-${varName}-${option})`;
      return acc;
    }, {} as Record<string, string>);
    mappedOptions[option] = result;
  }
  return mappedOptions;
};

export const moxConfig = {
  prefix,
  // The clamp values will be calculated so that on these min/max sizes of the viewport, the size will lock to resp. min/max value of the space (e.g. `md`).
  clampViewportInlineSize: { min: 360, max: 1440 },
  viewportBreakpoints,
  containerBreakpoints,
  // Generated classnames will be suffixed with the `options` values (e.g., `inline-size` -> `.mox-inline-size-sm`)
  // The values either be just what is defined in `options` (required), or these `options` will be mapped to a variable (use the helper-function `mapOptionsToCSSVars`) or different value via an `optionsMap` (e.g. `{ md: var(--mox-space-sm), ... }`)
  // Together this will generate the css line: `.mox-inline-size-sm { width: var(--mox-space-sm); }`
  // If `responsive` is true, the classes will be generated for each min/max breakpoint as well (e.g., `.mox-inline-size-sm@tabletMin`, `.mox-inline-size-sm@cq400Max`, etc.)
  props: {
    // Keys of these objects are used to map React props to classnames (see: `propsToClassNames` helper)
    ...linkProps,
    ...textProps,
    ...flexProps,
    fontSize: {
      options: mapOptionsToCSSVars(spaces, ["--font-size"], "space"),
      responsive: true,
    },
    size: {
      options: mapOptionsToCSSVars(
        spaces,
        ["inline-size", "block-size"],
        "space"
      ),
      responsive: true,
    },
    inlineSize: {
      options: mapOptionsToCSSVars(spaces, ["inline-size"], "space"),
      responsive: true,
    },
    blockSize: {
      options: mapOptionsToCSSVars(spaces, ["block-size"], "space"),
      responsive: true,
    },
    padding: {
      options: mapOptionsToCSSVars(spaces, ["padding"], "space"),
      responsive: true,
    },
    paddingBlock: {
      options: mapOptionsToCSSVars(spaces, ["padding-block"], "space"),
      responsive: true,
    },
    paddingInline: {
      options: mapOptionsToCSSVars(spaces, ["padding-inline"], "space"),
      responsive: true,
    },
    paddingBlockStart: {
      options: mapOptionsToCSSVars(spaces, ["padding-block-start"], "space"),
      responsive: true,
    },
    paddingBlockEnd: {
      options: mapOptionsToCSSVars(spaces, ["padding-block-end"], "space"),
      responsive: true,
    },
    paddingInlineStart: {
      options: mapOptionsToCSSVars(spaces, ["padding-inline-start"], "space"),
      responsive: true,
    },
    paddingInlineEnd: {
      options: mapOptionsToCSSVars(spaces, ["padding-inline-end"], "space"),
      responsive: true,
    },
    gap: {
      options: mapOptionsToCSSVars(spaces, ["gap"], "space"),
      responsive: true,
    },
    rowGap: {
      options: mapOptionsToCSSVars(spaces, ["row-gap"], "space"),
      responsive: true,
    },
    columnnGap: {
      options: mapOptionsToCSSVars(spaces, ["column-gap"], "space"),
      responsive: true,
    },
    borderRadius: {
      options: {
        "0": { "border-radius": "0" },
        "1px": { "border-radius": "1px" },
        "2px": { "border-radius": "2px" },
        "4px": { "border-radius": "4px" },
        "8px": { "border-radius": "8px" },
        circle: { "border-radius": "50%" },
      },
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
        black: { "border-color": "black" },
        white: { "border-color": "white" },
      },
    },
    borderStyle: {
      options: {
        solid: { "border-style": "solid" },
        dashed: { "border-style": "dashed" },
        dotted: { "border-style": "dotted" },
      },
    },
    backgroundColor: {
      options: {
        transparent: { "background-color": "transparent" },
        black: { "background-color": "black" },
        white: { "background-color": "white" },
      },
    },
    // gap: {
    //   property: "gap",
    //   optionsMap: spaceOptionsMaps,
    //   options: spaces,
    //   responsive: true,
    // },
    // fontSize: {
    //   property: "font-size",
    //   optionsMap: spaceOptionsMaps,
    //   options: spaces,
    //   responsive: true,
    // },
    // alignItems: {
    //   property: "align-items",
    //   options: ["start", "center", "end", "stretch", "baseline"],
    //   responsive: true,
    // },
    // justifyContent: {
    //   property: "justify-content",
    //   options: [
    //     "start",
    //     "center",
    //     "end",
    //     "stretch",
    //     "space-between",
    //     "space-around",
    //     "space-evenly",
    //   ],
    //   responsive: true,
    // },
    // borderWidth: {
    //   property: "border-width",
    //   options: ["0px", "1px", "2px", "4px", "8px"],
    // },
    // textDecoration: {
    //   property: "--text-decoration",
    //   options: ["none", "underline"],
    //   responsive: true,
    // },
    // textDecorationHover: {
    //   property: "--text-decoration-hover",
    //   state: "hover",
    //   options: ["none", "underline"],
    //   responsive: true,
    // },
    // lineHeight: {
    //   property: "line-height",
    //   options: ["1.3", "1.5"],
    // },
    // fontWeight: {
    //   property: "font-weight",
    //   options: ["light", "normal", "medium", "bold"],
    // },
    // textColor: {
    //   property: "--text-color",
    //   options: [
    //     "primary",
    //     "secondary",
    //     "tertiary",
    //     "error",
    //     "warning",
    //     "success",
    //     "info",
    //     "inherit",
    //   ],
    // },
    // textColorHover: {
    //   property: "--text-color-hover",
    //   options: [
    //     "primary",
    //     "secondary",
    //     "tertiary",
    //     "error",
    //     "warning",
    //     "success",
    //     "info",
    //     "inherit",
    //   ],
    // },
  },
} as const satisfies MoxConfig;

export type MoxConfigProps = {
  [propKey: string]: {
    options: {
      [optionKey: string]: {
        [cssProperty: string]: string;
      };
    };
    responsive?: boolean;
    state?: "hover" | "focus" | "active" | "disabled";
  };
};

type MoxConfig = {
  prefix: string;
  clampViewportInlineSize: { min: number; max: number };
  viewportBreakpoints: typeof viewportBreakpoints;
  containerBreakpoints: typeof containerBreakpoints;
  props: MoxConfigProps;
};
