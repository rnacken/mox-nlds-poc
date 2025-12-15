/**
 * MOX CSS Configuration File
 *
 * Contains the settings to be used for calculating & generating the css files in `_generated`:
 * - spaces: all clamp-values for spacing for each space-key (e.g., xs, sm, md, lg, xl)
 * - responsive: all css-classes that should be generated for responsive design
 *
 */

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

const borderWidths = ["0px", "1px", "2px", "4px", "8px"] as const;

/**
 * Maps CSS class options to their corresponding CSS variable names.
 * e.g. `{ 'md': 'var(--mox-space-md)', ... }`
 *
 * @param options - The array of CSS class options.
 * @param varName - The base name of the CSS variable.
 */
const mapOptionsToCSSVars = (options: readonly string[], varName: string) => {
  const mappedOptions: Record<string, string> = {};
  for (const option of options) {
    mappedOptions[option] = `var(--${prefix}-${varName}-${option})`;
  }
  return mappedOptions;
};

const spaceOptionsMaps = mapOptionsToCSSVars(spaces, "space");

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
  properties: {
    // Keys of these objects are used to map React props to classnames (see: `propsToClassNames` helper)
    inlineSize: {
      property: "inline-size",
      optionsMap: spaceOptionsMaps,
      options: spaces,
      responsive: true,
    },
    blockSize: {
      property: "block-size",
      optionsMap: spaceOptionsMaps,
      options: spaces,
      responsive: true,
    },
    gap: {
      property: "gap",
      optionsMap: spaceOptionsMaps,
      options: spaces,
      responsive: true,
    },
    alignItems: {
      property: "align-items",
      options: ["start", "center", "end", "stretch", "baseline"],
      responsive: true,
    },
    justifyContent: {
      property: "justify-content",
      options: [
        "start",
        "center",
        "end",
        "stretch",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      responsive: true,
    },
    borderWidth: {
      property: "border-width",
      optionsMap: mapOptionsToCSSVars(borderWidths, "border-width"),
      options: borderWidths,
    },
  },
} as const satisfies MoxConfig;

type MoxConfig = {
  prefix: string;
  clampViewportInlineSize: { min: number; max: number };
  viewportBreakpoints: typeof viewportBreakpoints;
  containerBreakpoints: typeof containerBreakpoints;
  properties: {
    [key: string]: {
      property: string;
      optionsMap?: Record<string, string>;
      options: readonly string[];
      responsive?: boolean;
    };
  };
};
