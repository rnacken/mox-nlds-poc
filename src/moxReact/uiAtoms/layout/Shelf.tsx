import clsx from "clsx";
import type { ElementType } from "react";
import type { AtomProps, StylingPropMap } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

const stylingPropMap = {
  gap: "gap",
  alignItems: "alignItems",
  justifyContent: "justifyContent",
} as const satisfies StylingPropMap;

/**
 * Shelf component that displays its children in a shelf (horizontal) layout.
 * Functionally a flex-box with direction `row`.
 *
 * Responsibilities:
 * 1. Arrange child elements in a horizontal row.
 * 2. Apply consistent spacing (gap) between child elements.
 * 3. Support wrapping of child elements to the next line if necessary (`wrap` prop).
 * 4. Defining inline-size of all child elements.
 *   - allChildrenFlex: `1`, etc.
 * 5. Defining inline-size of first & last child elements.
 *   - firstChildFlex: `auto`, etc.
 *   - lastChildFlex: `auto`, etc.
 *
 * Not responsible for:
 * ...
 */
export const MoxAtomShelf = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof stylingPropMap>) => {
  const Component = as || ("div" as ElementType);

  // convert style props into correct classnames
  const stylePropClassNames = propsToClassNames(stylingPropMap, props);

  const { gap, alignItems, ...restProps } = props;

  return (
    <Component
      ref={ref}
      className={clsx("mox-atom-shelf", stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export const MoxShelf = MoxAtomShelf;
