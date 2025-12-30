import type { ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";
import clsx from "clsx";

const styleProps = [
  "underline",
  "underlineHover",
  // "color",
] as const satisfies StyleProps;

/**
 * Link component that renders a link element, which can wrap other elements, like Cards, text.
 */
export const MoxAtomLink = <T extends ElementType = "a">({
  className,
  children,
  ref,
  as,
  ...props
}: AtomProps<T, typeof styleProps>) => {
  const Component = as || ("a" as ElementType);

  // convert style props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    styleProps,
    props
  );

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
