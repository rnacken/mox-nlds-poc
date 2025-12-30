import type { spaces } from "../../../moxCss/mox.config";
import type { AtomProps } from "../AtomTypes";
import { MoxTextBlock, textBlockStyleProps } from "./TextBlock";

const levelToSpaceMap: Record<1 | 2 | 3 | 4 | 5 | 6, (typeof spaces)[number]> =
  {
    1: "3xl",
    2: "2xl",
    3: "xl",
    4: "lg",
    5: "md",
    6: "sm",
  };

/**
 * A `MoxAtomTextBlock`, rendered as a `<h1>`, `<h2>`, etc (depending on `level`) and with a larger font-size (overwritable with `sizeLevel`), used for a page heading
 */
export const MoxAtomHeading = ({
  level,
  sizeLevel = level,
  ...props
}: AtomProps<"h1", typeof textBlockStyleProps> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  sizeLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}) => {
  return (
    <MoxTextBlock
      as={`h${level}`}
      fontSize={levelToSpaceMap[sizeLevel]}
      {...props}
    />
  );
};

export const MoxHeading = MoxAtomHeading;
