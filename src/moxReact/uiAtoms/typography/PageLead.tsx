import type { AtomProps } from "../AtomTypes";
import { MoxTextBlock, stylingPropMap } from "./TextBlock";

/**
 * A `MoxAtomTextBlock`, rendered as a `<p>` and with the larger (`lg`) font-size, used for an introduction/lead of a page
 */
export const MoxAtomPageLead = (
  props: AtomProps<"p", typeof stylingPropMap>
) => {
  return <MoxTextBlock as="p" fontSize="lg" {...props} />;
};

export const MoxPageLead = MoxAtomPageLead;
