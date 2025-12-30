import type { AtomProps } from "../AtomTypes";
import { MoxAtomStack, stackStyleProps } from "./Stack";

/**
 * A horizontal `MoxAtomStack`.
 */
export const MoxAtomShelf = (
  props: AtomProps<"div", typeof stackStyleProps>
) => {
  return <MoxAtomStack direction="row" {...props} />;
};

export const MoxShelf = MoxAtomShelf;
