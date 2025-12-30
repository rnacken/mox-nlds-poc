import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const boxStyleProps = [
  "size",
  "inlineSize",
  "blockSize",
  "padding",
  "paddingBlock",
  "paddingInline",
  "paddingBlockStart",
  "paddingBlockEnd",
  "paddingInlineStart",
  "paddingInlineEnd",
  "borderRadius",
  "borderStartStartRadius",
  "borderStartEndRadius",
  "borderEndStartRadius",
  "borderEndEndRadius",
  "borderWidth",
  "borderColor",
  "borderStyle",
  "backgroundColor",
  "gridColumn",
  "gridColumnStart",
  "gridColumnEnd",
] as const satisfies StyleProps;

/**
 * Box component;
 *
 * Responsibilities
 * 1. Serve as a container for layout purposes.
 * 2. Provide padding, border and background-color options.
 *   - The background-color will also set a contrast color for text inside the box, via CSS variables.
 * 3. align-self, justify-self, place-self support via className prop.
 * 4. Can be placed inside a page-grid by using the grid-columns.
 *
 * Not responsible for:
 * 1. Any alignment or distribution of child elements (use `Shelf`, `Stack`, or any other layout component for that).
 * 2. Managing state or behavior beyond layout concerns (Atoms never do).
 */
export const MoxAtomBox = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof boxStyleProps>) => {
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    boxStyleProps,
    props
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-atom-box", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxBox = MoxAtomBox;
