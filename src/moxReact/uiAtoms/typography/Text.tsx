import type { ComponentProps, ElementType } from "react";
import type { AtomProps } from "../AtomTypes";

/**
 * A text component to be used for any text content.
 * Usable as an inline-text or block-text (default) element
 */

export const MoxAtomText = <T extends ElementType = "span">({
  children,
  ref,
  as,
  ...props
}: AtomProps<T>) => {
  const Component = as || ("span" as ElementType);

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
};

// Convenience components for common text variants
export const MoxTextInline = (props: ComponentProps<typeof MoxAtomText>) => (
  <MoxAtomText variant="inline" {...props} />
);

export const MoxTextBlock = (props: ComponentProps<typeof MoxAtomText>) => (
  <MoxAtomText variant="block" {...props} />
);
