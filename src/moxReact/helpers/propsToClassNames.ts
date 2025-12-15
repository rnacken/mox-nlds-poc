import { moxConfig } from "../../moxCss/mox.config";
import type { StylePropMap, StylePropTypes } from "../uiAtoms/AtomTypes";

const validateValue = (prop: string, value: string) => {
  const propConfig =
    moxConfig.properties[prop as keyof typeof moxConfig.properties];
  if (!propConfig) {
    console.warn(`Warning: Property ${prop} is not defined in moxConfig.`);
    return false;
  }

  // Custom options, instead of variable-options - always valid
  if (!("varName" in propConfig)) {
    return true;
  }

  const validValues = propConfig.options;
  if (validValues == null) {
    console.warn(
      `Warning: Property ${prop} has no defined values in moxConfig.`
    );
    return false;
  }
  // Don't know why TS is complaining here about `value` being `never`...
  if (validValues != null && !validValues.includes(value as unknown as never)) {
    console.warn(
      `Warning: Value ${value} is not a valid value for property ${prop}.`
    );
    return false;
  }
  return true;
};

export const propsToClassNames = (
  stylingPropMap: StylePropMap,
  props: StylePropTypes<typeof stylingPropMap>
): Array<string> => {
  const classNames: Array<string> = [];

  const { prefix } = moxConfig;

  for (const [prop, value] of Object.entries(props)) {
    // Only allow props that are defined in the styling map
    if (!(prop in stylingPropMap)) {
      console.warn(`Warning: we could not find the ${prop} in the styling map`);
      continue;
    }

    const propConfig =
      moxConfig.properties[prop as keyof typeof moxConfig.properties];

    const cssPropName = propConfig?.property;

    if (cssPropName == null) {
      console.warn(
        `Warning: we could not find valid css-property-name for ${prop} in the moxConfig`
      );
      continue;
    }

    // Either string is given (no responsiveness)
    if (typeof value === "string") {
      // e.g. inlineSize="xl"
      if (!validateValue(prop, value)) continue;
      classNames.push(`${prefix}-${cssPropName}-${value}`);
    } else if (typeof value === "object" && value !== null) {
      // Or an object with breakpoints is given
      // e.g. inlineSize={{ min640: "xl", max640: "md" }}
      for (const [breakpoint, responsiveValue] of Object.entries(value)) {
        if (!validateValue(prop, responsiveValue)) continue;
        classNames.push(
          `${prefix}-${cssPropName}-${responsiveValue}@${breakpoint}`
        );
      }
    }
  }

  return classNames;
};

/** Todo: Some unit-tests? */
