import type { AtomProps } from "../AtomTypes";
import { MoxTextBlock, styleProps } from "./TextBlock";

/**
 * A `MoxAtomTextBlock`, rendered as a `<p>` and with the larger (`lg`) font-size, used for an introduction/lead of a page
 */
export const MoxAtomPageLead = (props: AtomProps<"p", typeof styleProps>) => {
  return <MoxTextBlock as="p" fontSize="lg" {...props} />;
};

export const MoxPageLead = MoxAtomPageLead;
