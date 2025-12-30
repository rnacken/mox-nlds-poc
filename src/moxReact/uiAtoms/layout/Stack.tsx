import type { ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";
import clsx from "clsx";

export const stackStyleProps = [
  "gap",
  "columnGap",
  "rowGap",
  "alignItems",
  "justifyContent",
  "direction",
  "wrap",
] as const satisfies StyleProps;

/**
 * Stack component that displays its children in a stack (vertical) layout.
 * Functionally a flex-box with direction `column`.
 *
 * Responsibilities:
 * 1. Arrange child elements in a vertical column.
 * 2. Apply consistent spacing (gap) between child elements.
 * 3. Support wrapping of child elements to the next line if necessary (`wrap` prop).
 * 4. Defining inline-size of all child elements.
 *   - allChildrenFlex: `1`, etc.
 * 5. Defining inline-size of first & last child elements.
 *   - firstChildFlex: `auto`, etc.
 *   - lastChildFlex: `auto`, etc.
 *
 * Not responsible for:
 * 1. Complex grid/flex layouts
 */
export const MoxAtomStack = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof stackStyleProps>) => {
  const Component = as || ("div" as ElementType);

  // convert style props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    stackStyleProps,
    props
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-atom-stack", stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export const MoxStack = MoxAtomStack;
