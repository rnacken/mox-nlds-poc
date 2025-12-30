import { MoxTextBlock, textBlockStyleProps } from "./TextBlock";
import type { AtomProps } from "../AtomTypes";

/**
 * A `MoxAtomTextBlock`, rendered as a `<p>` and with the regular (`md`) font-size.
 */
export const MoxAtomParagraph = (
  props: AtomProps<"p", typeof textBlockStyleProps>
) => {
  return <MoxTextBlock as="p" fontSize="md" {...props} />;
};

export const MoxParagraph = MoxAtomParagraph;
