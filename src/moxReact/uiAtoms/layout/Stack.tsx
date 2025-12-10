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
 * ...
 */
export const MoxAtomStack = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const MoxStack = MoxAtomStack;
