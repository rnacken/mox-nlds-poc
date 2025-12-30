import { moxConfig } from "../../moxCss/mox.config";
import type { StyleProps, StylePropTypes } from "../uiAtoms/AtomTypes";

const validateValue = (prop: string, value: string) => {
  const propConfig = moxConfig.props[prop as keyof typeof moxConfig.props];
  if (!propConfig) {
    console.warn(`Warning: prop'${prop}' is not defined in moxConfig.`);
    return false;
  }
  const validValues = Object.keys(propConfig.options);
  if (validValues == null) {
    console.warn(`Warning: prop '${prop}' has no defined values in moxConfig.`);
    return false;
  }
  if (validValues != null && !validValues.includes(value)) {
    console.warn(
      `Warning: value '${value}' for prop '${prop}' is not a valid value.`
    );
    return false;
  }
  return true;
};

/**
 * Convert style props to class names. The classnames are generated based on the moxConfig and the `generateCss.ts` utility.
 * @param styleProps - The style props to consider.
 * @param props - The props object containing values for the style props.
 * @returns An array of class names.
 */
export const propsToClassNames = <P extends Record<string, any>>(
  styleProps: StyleProps,
  props: StylePropTypes<typeof styleProps> & P
): { stylePropClassNames: Array<string>; restProps: P } => {
  const stylePropClassNames: Array<string> = [];
  const restProps = {} as P;

  for (const [_propKey, value] of Object.entries(props)) {
    // Need to cast it since Object.entries loses the type info
    const propKey = _propKey as keyof typeof moxConfig.props;

    // Only allow props that are defined in the styling map
    if (!styleProps.includes(propKey)) {
      restProps[_propKey as keyof P] = value;
      continue;
    }

    const propConfig = moxConfig.props[propKey];
    const state = "state" in propConfig ? `-${propConfig.state}` : "";

    // Either string is given (no responsiveness)
    if (typeof value === "string") {
      // e.g. inlineSize="xl"
      if (!validateValue(propKey, value)) continue;
      stylePropClassNames.push(
        `${moxConfig.prefix}-${propKey}-${value.replace(
          /[^a-zA-Z0-9-]/g,
          "-"
        )}${state}`
      );
    } else if (typeof value === "object" && value !== null) {
      // Or an object with breakpoints is given
      // e.g. inlineSize={{ min640: "xl", max640: "md" }}
      for (const [breakpoint, responsiveValue] of Object.entries(value) as [
        string,
        string
      ][]) {
        if (!validateValue(propKey, responsiveValue)) continue;
        stylePropClassNames.push(
          `${moxConfig.prefix}-${propKey}-${responsiveValue.replace(
            /[^a-zA-Z0-9-]/g,
            "-"
          )}@${breakpoint}${state}`
        );
      }
    }
  }

  return { stylePropClassNames, restProps };
};

/** Todo: Some unit-tests? */
