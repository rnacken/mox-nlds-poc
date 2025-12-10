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
export const MoxAtomShelf = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const MoxShelf = MoxAtomShelf;
