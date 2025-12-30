import { posix as posixPath } from "path";
import { moxConfig, spaces } from "./mox.config";
import * as fs from "fs";

const getClassName = ({
  propKey,
  optionKey,
  responsiveKey,
  state,
}: {
  propKey: string;
  optionKey: string;
  responsiveKey?: string;
  state?: "hover" | "active" | "focus" | "disabled";
}) => {
  return `${responsiveKey != null ? "\t\t" : "\t"}.${
    moxConfig.prefix
  }-${propKey}-${optionKey.replace(/[^a-zA-Z0-9-]/g, "-")}${
    responsiveKey != null ? `\\@${responsiveKey}` : ""
  }${state != null ? `-${state}:${state}` : ""}`;
};

/**
 * Function to generate CSS class files based on the Mox configuration.
 * It reads the configuration from `mox.config.ts` and creates CSS files
 * in the `_generated/classNames` directory for each defined class name.
 *
 * These classNames are used for the `propsToClassNames.ts` utility to map props to styles.
 */
const generateClassNames = () => {
  const files: string[] = [];

  Object.entries(moxConfig.props).forEach(
    ([propKey, { options, ...restProp }]) => {
      const responsive =
        "responsive" in restProp && restProp.responsive ? true : false;
      const state =
        "state" in restProp
          ? (restProp.state as "hover" | "focus" | "active" | "disabled")
          : undefined;

      // Create a separate CSS file for each property
      const result: Array<string> = [
        `
/**
  * This file is auto-generated. Do not edit directly.
  * Generated from src/moxCss/mox.config.ts and script: \`generateCss.ts\`
*/

@layer props {`,
      ];
      for (const [optionKey, optionValue] of Object.entries(options)) {
        result.push(`${getClassName({
          propKey,
          optionKey,
          state,
        })} {
${Object.entries(optionValue)
  .map(([cssProp, cssValue]) => `\t\t${cssProp}: ${cssValue};`)
  .join("\n")}  
\t}`);
      }

      if (responsive) {
        // For each viewport breakpoint...
        for (const key of Object.keys(moxConfig.viewportBreakpoints)) {
          const width =
            moxConfig.viewportBreakpoints[
              key as keyof typeof moxConfig.viewportBreakpoints
            ];
          result.push(`\t/* Viewport breakpoint: ${key} (${width}px) */`);

          // ... add a min and max media query...
          for (const direction of ["Min", "Max"] as const) {
            result.push(
              `\t@media only screen and (${direction.toLowerCase()}-device-width: ${width}px) {`
            );

            // ... for each option
            for (const [optionKey, optionValue] of Object.entries(options)) {
              result.push(`${getClassName({
                propKey,
                optionKey,
                responsiveKey: `${key}${direction}`,
                state,
              })} {
${Object.entries(optionValue)
  .map(([cssProp, cssValue]) => `\t\t\t${cssProp}: ${cssValue};`)
  .join("\n")}
\t\t}`);
            }

            result.push(`\t}`);
          }
        }
        // For each container breakpoint...
        for (const key of Object.keys(moxConfig.containerBreakpoints)) {
          const width =
            moxConfig.containerBreakpoints[
              key as keyof typeof moxConfig.containerBreakpoints
            ];
          result.push(`\t/* Container breakpoint: ${key} (${width}px) */`);

          // ... add a min and max container query...
          for (const direction of ["Min", "Max"] as const) {
            result.push(
              `\t@container (${direction.toLowerCase()}-width: ${width}px) {`
            );

            // ... for each option
            for (const [optionKey, optionValue] of Object.entries(options)) {
              result.push(`${getClassName({
                propKey,
                optionKey,
                responsiveKey: `${key}${direction}`,
                state,
              })} {
${Object.entries(optionValue)
  .map(([cssProp, cssValue]) => `\t\t\t${cssProp}: ${cssValue};`)
  .join("\n")}
\t\t}`);
            }

            result.push(`\t}`);
          }
        }
      }

      result.push(`}`); // end of @layer

      // Write the generated CSS to a file
      fs.writeFileSync(
        posixPath.join(__dirname, "_generated", "properties", `${propKey}.css`),
        result.join("\n")
      );
      files.push(`./${propKey}.css`);
    }
  );

  // Write an index file exporting all generated files
  fs.writeFileSync(
    posixPath.join(__dirname, "_generated", "properties", `index.css`),
    files.map((file) => `@import '${file}';`).join("\n")
  );

  console.info(
    `✅ Generated properties:\n\t${Object.keys(moxConfig.props).join(", ")}\n`
  );
};

const generateClampSpaces = () => {
  // loop through all spaces and generate separate files for each space with the clamp values
  spaces.forEach((space) => {
    const clampValues = `
/**
  * This file is auto-generated. Do not edit directly.
  * Generated from src/moxCss/mox.config.ts and script: \`generateCss.ts\`
  *
  * Responsive spacing for the space-size \`${space}\`
*/

@layer base {
  body {
    --clamp-slope-${space}: calc(
      (var(--mox-space-${space}-max) - var(--mox-space-${space}-min)) /
        (var(--viewport-max-inline-size) - var(--viewport-min-inline-size))
    );
    --clamp-intercept-${space}: calc(
      var(--mox-space-${space}-min) - var(--viewport-min-inline-size) *
        var(--clamp-slope-${space})
    );
    --mox-space-${space}: clamp(
      var(--mox-space-${space}-min),
      calc(var(--clamp-intercept-${space}) + var(--clamp-slope-${space}) * 100vw),
      var(--mox-space-${space}-max)
    );
  }
}
        `;
    fs.writeFileSync(
      posixPath.join(
        __dirname,
        "_generated",
        "clampSpaces",
        `clamp-${space}.css`
      ),
      clampValues
    );
  });
  // Write an index file exporting all generated files
  fs.writeFileSync(
    posixPath.join(__dirname, "_generated", "clampSpaces", `index.css`),
    [
      ...spaces.map((space) => `@import 'clamp-${space}.css';`),
      `
/** These imports calculate the correct clamp value for fluid scaling for each space-size (md, xs, etc): 
  *
  * slope = (space-max - space-min) / (viewport-max - viewport-min)
  * intercept = min - (viewport-min * slope)
  * clamped-size = clamp(space-min, calc(intercept + slope * 100vw), space-max)
  *
  * See: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
*/

@layer base {
  body {
    --viewport-min-inline-size: ${moxConfig.clampViewportInlineSize.min}px;
    --viewport-max-inline-size: ${moxConfig.clampViewportInlineSize.max}px;
  }
}
`,
    ].join("\n")
  );

  console.info(
    `✅ Generated clamp space files for spaces:\n\t${spaces.join(", ")}\n`
  );
};

// Todo: clean generated folder first?
generateClassNames();
generateClampSpaces();
