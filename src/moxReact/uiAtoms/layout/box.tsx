/**
 * Box component;
 *
 * Responsibilities
 * 1. Serve as a container for layout purposes.
 * 2. Provide padding, border and background options.
 * 3. align-self, justify-self, place-self support via className prop.
 *
 * Not responsible for:
 * 1. Any alignment or distribution of child elements (use `Shelf`, `Stack`, or any other layout component for that).
 * 2. Managing state or behavior beyond layout concerns (Atoms never do).
 */

import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

const stylingPropMap = {
  inlineSize: "inlineSize",
  blockSize: "blockSize",
  // bloep: "bar",
  // backgroundColor: ["red", "blue", "green", "transparent"],
} as const;

// Components are always named exported with `Mox` and `level (Atom, Molecule, etc)` prefix
export const MoxAtomBox = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...restProps
}: AtomProps<T, typeof stylingPropMap>) => {
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const stylePropClassNames = propsToClassNames(stylingPropMap, restProps);

  console.log(restProps, stylePropClassNames);

  return (
    <Component
      ref={ref}
      className={clsx(...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxBox = MoxAtomBox;
