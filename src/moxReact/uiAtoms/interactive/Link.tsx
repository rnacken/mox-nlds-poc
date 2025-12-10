/**
 * Link component that renders a link element, which can wrap other elements, like Cards, text.
 */

import type { ElementType } from "react";
import type { AtomProps } from "../AtomTypes";

export const MoxAtomLink = <T extends ElementType = "a">({
  children,
  ref,
  as,
  ...props
}: AtomProps<T>) => {
  const Component = as || ("div" as ElementType);

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
};
