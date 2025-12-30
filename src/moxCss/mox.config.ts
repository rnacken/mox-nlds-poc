/**
 * MOX CSS Configuration File
 *
 * Contains the settings to be used for calculating & generating the css files in `_generated`:
 * - spaces: all clamp-values for spacing for each space-key (e.g., xs, sm, md, lg, xl)
 * - responsive: all css-classes that should be generated for responsive design
 *
 */

import { boxProps } from "./props/box";
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

const globalSizeOptions = [
  "0",
  "auto",
  "inherit",
  "fit-content",
  "max-content",
  "min-content",
] as const;

const globalGapOptions = ["0", "auto", "inherit"];

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

/**
 * Map options directly to their values (no CSS variables).
 */
const mapOptionsToValues = <O extends string>(
  options: ReadonlyArray<O>,
  cssProps: Array<string>
) => {
  const mappedBasicOptions = {} as Record<O, Record<string, string>>;
  for (const option of options) {
    const result = cssProps.reduce((acc, cssProp) => {
      acc[cssProp] = `${option}`;
      return acc;
    }, {} as Record<string, string>);
    mappedBasicOptions[option] = result;
  }
  return mappedBasicOptions;
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
    ...boxProps,
    fontSize: {
      options: mapOptionsToCSSVars(spaces, ["--current-font-size"], "space"),
      responsive: true,
    },
    size: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["inline-size", "block-size"], "space"),
        ...mapOptionsToValues(globalSizeOptions, ["inline-size", "block-size"]),
      },
      responsive: true,
    },
    inlineSize: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["inline-size"], "space"),
        ...mapOptionsToValues(globalSizeOptions, ["inline-size"]),
      },
      responsive: true,
    },
    blockSize: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["block-size"], "space"),
        ...mapOptionsToValues(globalSizeOptions, ["block-size"]),
      },
      responsive: true,
    },
    padding: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["padding"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["padding"]),
      },
      responsive: true,
    },
    paddingBlock: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["padding-block"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["padding-block"]),
      },
      responsive: true,
    },
    paddingInline: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["padding-inline"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["padding-inline"]),
      },
      responsive: true,
    },
    paddingBlockStart: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["padding-block-start"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["padding-block-start"]),
      },
      responsive: true,
    },
    paddingBlockEnd: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["padding-block-end"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["padding-block-end"]),
      },
      responsive: true,
    },
    paddingInlineStart: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["padding-inline-start"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["padding-inline-start"]),
      },
      responsive: true,
    },
    paddingInlineEnd: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["padding-inline-end"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["padding-inline-end"]),
      },
      responsive: true,
    },
    gap: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["gap"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["gap"]),
      },
      responsive: true,
    },
    rowGap: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["row-gap"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["row-gap"]),
      },
      responsive: true,
    },
    columnGap: {
      options: {
        ...mapOptionsToCSSVars(spaces, ["column-gap"], "space"),
        ...mapOptionsToValues(globalGapOptions, ["column-gap"]),
      },
      responsive: true,
    },
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
