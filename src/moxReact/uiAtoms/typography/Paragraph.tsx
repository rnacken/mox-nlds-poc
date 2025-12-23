import { MoxTextBlock, stylingPropMap } from "./TextBlock";
import type { AtomProps } from "../AtomTypes";

/**
 * A `MoxAtomTextBlock`, rendered as a `<p>` and with the regular (`md`) font-size.
 */
export const MoxAtomParagraph = (
  props: AtomProps<"p", typeof stylingPropMap>
) => {
  return <MoxTextBlock as="p" fontSize="md" {...props} />;
};

export const MoxParagraph = MoxAtomParagraph;
