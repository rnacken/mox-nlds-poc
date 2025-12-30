import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

const styleProps = [] as const satisfies StyleProps;

/**
 * Page grid component.
 * The layout of a page is not defined with a <Container> and <Row> / <Column> components, since that is too rigid
 * (often, a design needs to 'break out' of a container, or have elements that span multiple columns, etc).
 *
 * A Box can be placed inside a PageGrid, using the grid-column props to position it.
 * The page-grid is divided into 12 equal columns with a gap between each column, and space on the sides so the 'page' is limited to a max inline-size.
 * | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
 * |---|---|---|---|---|---|---|---|---|---|----|----|----|----|
 * | [window-start] | [page-start] | 2 | 3 | 4  | 5 | 6 | 7 | 8 | 9 | 10 | 11 | [page-end] | [window-end] |
 *
 * Responsibilities
 * 1. Create a block that can be used as a page grid container, by using grid-lines.
 *
 * Not responsible for:
 * 1. Padding, background-colors, borders, etc (use a `MoxBox` inside if you need them).
 */
export const MoxAtomPageGrid = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof styleProps>) => {
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    styleProps,
    props
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-atom-page-grid", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxPageGrid = MoxAtomPageGrid;
