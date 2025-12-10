/**
 * MOX CSS Configuration File
 *
 * Contains the settings to be used for calculating & generating the css files in `_generated`:
 * - spaces: all clamp-values for spacing for each space-key (e.g., xs, sm, md, lg, xl)
 * - responsive: all css-classes that should be generated for responsive design
 *
 */

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

export const moxConfig = {
  prefix: "mox",
  // The clamp values will be calculated so that on these min/max sizes of the viewport, the size will lock to resp. min/max value of the space (e.g. `md`).
  clampViewportInlineSize: { min: 360, max: 1440 },
  viewportBreakpoints,
  containerBreakpoints,
  // Generated classnames will be suffixed with the `options` values (e.g., `inline-size` -> `.mox-inline-size-sm`)
  // The values will be mapped to the css variables defined in `tokens.css`, by suffixing the var with the `options` values (e.g. `space` -> `var(--mox-space-sm)`)
  // Together this will generate the css line: `.mox-inline-size-sm { width: var(--mox-space-sm); }`
  // If `responsive` is true, the classes will be generated for each min/max breakpoint as well (e.g., `.mox-inline-size-sm@tabletMin`, `.mox-inline-size-sm@cq400Max`, etc.)
  properties: {
    // Keys of these objects are used to map React props to classnames (see: `propsToClassNames` helper)
    inlineSize: {
      property: "inline-size",
      varName: "space",
      varOptions: spaces,
      responsive: true,
    },
    blockSize: {
      property: "block-size",
      varName: "space",
      varOptions: spaces,
      responsive: true,
    },
    borderWidth: {
      property: "border-width",
      varName: "border-width",
      varOptions: borderWidths,
      responsive: false,
    },
    bar: {
      property: "bar",
      varName: "border-width",
      varOptions: borderWidths,
      responsive: false,
    },
  },
} as const;
