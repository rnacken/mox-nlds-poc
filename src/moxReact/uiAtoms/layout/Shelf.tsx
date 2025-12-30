import type { AtomProps } from "../AtomTypes";
import { MoxAtomStack, type styleProps } from "./Stack";

/**
 * A horizontal `MoxAtomStack`.
 */
export const MoxAtomShelf = (props: AtomProps<"div", typeof styleProps>) => {
  return <MoxAtomStack direction="row" {...props} />;
};

export const MoxShelf = MoxAtomShelf;
