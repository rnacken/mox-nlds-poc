import { moxConfig } from "../../moxCss/mox.config";
import type { StylePropMap, StylePropTypes } from "../uiAtoms/AtomTypes";

export const propsToClassNames = (
  stylingPropMap: StylePropMap,
  props: StylePropTypes<typeof stylingPropMap>
): Array<string> => {
  const classNames: Array<string> = [];
  const { prefix } = moxConfig;

  for (const [prop, value] of Object.entries(props)) {
    // Only allow props that are defined in the styling map
    if (!(prop in stylingPropMap)) continue;

    // Either string is given (no responsiveness)
    if (typeof value === "string") {
      // inlineSize="xl"
      classNames.push(`${prefix}-${prop}-${value}`);
    } else if (typeof value === "object" && value !== null) {
      // Or an object with breakpoints is given
      // inlineSize={{ min640: "xl", max640: "md" }}
      for (const [breakpoint, responsiveValue] of Object.entries(value)) {
        if (responsiveValue)
          classNames.push(
            `${prefix}-${prop}-${responsiveValue}\\@${breakpoint}`
          );
      }
    }
  }

  return classNames;
};

/** Todo: Some unit-tests? */
