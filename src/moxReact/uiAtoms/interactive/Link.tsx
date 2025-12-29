import type { ElementType } from "react";
import type { AtomProps, StylingPropMap } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";
import clsx from "clsx";

const stylingPropMap = {
  underline: "textDecoration",
  underlineHover: "textDecorationHover",
} as const satisfies StylingPropMap;

/**
 * Link component that renders a link element, which can wrap other elements, like Cards, text.
 */
export const MoxAtomLink = <T extends ElementType = "a">({
  className,
  children,
  ref,
  as,
  ...props
}: AtomProps<T, typeof stylingPropMap>) => {
  const Component = as || ("a" as ElementType);

  // convert style props into correct classnames
  const stylePropClassNames = propsToClassNames(stylingPropMap, props);

  const { underline, underlineHover, ...restProps } = props;

  return (
    <Component
      ref={ref}
      className={clsx("mox-atom-link", stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};
