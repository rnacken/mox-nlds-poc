import type { ArgTypes } from "@storybook/react-vite";
import { moxConfig } from "../../moxCss/mox.config";

/**
 * Generates argTypes for style props to be used in Storybook.
 * @param styleProps - An array of style prop names.
 * @returns An object mapping style prop names to their argTypes.
 */
export const getStylePropArgTypes = (
  styleProps: ReadonlyArray<keyof typeof moxConfig.props>
) => {
  return styleProps.reduce((acc, prop) => {
    const options =
      "responsive" in moxConfig.props[prop] && moxConfig.props[prop].responsive
        ? [
            ...Object.keys(moxConfig.props[prop].options),
            "",
            "  MEDIA QUERIES:",
            ...Object.entries(moxConfig.viewportBreakpoints).flatMap(
              ([key, value], i) => [
                `${" ".repeat(i)}`,
                `==== ${key} (${value}px) ====`,
                ...Object.keys(moxConfig.props[prop].options).map(
                  (option) => `${option}@${key}Min`
                ),
                ...Object.keys(moxConfig.props[prop].options).map(
                  (option) => `${option}@${key}Max`
                ),
              ]
            ),
            `${" ".repeat(Object.keys(moxConfig.viewportBreakpoints).length)}`,
            "  CONTAINER QUERIES:",
            ...Object.entries(moxConfig.containerBreakpoints).flatMap(
              ([key, value], i) => [
                `${" ".repeat(
                  i + Object.keys(moxConfig.viewportBreakpoints).length
                )}`,
                ,
                `==== ${key} (${value}px) ====`,
                ...Object.keys(moxConfig.props[prop].options).map(
                  (option) => `${option}@${key}Min`
                ),
                ...Object.keys(moxConfig.props[prop].options).map(
                  (option) => `${option}@${key}Max`
                ),
              ]
            ),
          ]
        : Object.keys(moxConfig.props[prop].options);
    acc[prop] = {
      control: {
        type: "select",
      },
      options,
    };

    return acc;
  }, {} as ArgTypes);
};
