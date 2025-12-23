import type { ElementType } from "react";
import type { AtomProps, StylingPropMap } from "../AtomTypes";
import clsx from "clsx";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const stylingPropMap = {
  fontSize: "fontSize",
} as const satisfies StylingPropMap;

/**
 * A text component to be used for any text content.
 * This element will have it's half-leading on the top/bottom trimmed to fit snugly in designs (e.g. placing it in a `<Shelf>` next to an Icon will align them perfectly at the top). See the orange border on the default component.
 *
 * Responsibilities:
 * 1. Render text content with appropriate semantics (via `as` prop).
 * 2. Apply font-size styling via classNames.
 *
 * Not responsible for:
 * 1. Managing text-specific behavior (e.g., truncation, wrapping)
 */

export const MoxAtomTextBlock = <T extends ElementType = "span">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof stylingPropMap>) => {
  const Component = as || ("span" as ElementType);
  // convert style props into correct classnames
  const stylePropClassNames = propsToClassNames(stylingPropMap, props);

  const { fontSize, ...restProps } = props;
  console.log(stylePropClassNames);
  return (
    <Component
      ref={ref}
      {...restProps}
      className={clsx("mox-atom-text-block", stylePropClassNames, className)}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxTextBlock = MoxAtomTextBlock;
