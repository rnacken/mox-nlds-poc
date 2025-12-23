import { useId } from "react";
import { MoxShelf } from "../../uiAtoms/layout/Shelf";
import { MoxTextBlock } from "../../uiAtoms/typography/TextBlock";
import { MoxAtomRadioButton } from "../../uiAtoms/form/RadioButton";

/**
 * Radio-button component with a label.
 *
 * If you want a component with an error-message and explanation options, use the Organism `MoxRadioButtonField`.
 *
 * Responsibilities:
 * 1. Render a radio-button with a label.
 */
export const MoxMoleculeRadioButtonField = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const id = useId();

  return (
    <MoxShelf gap="md" alignItems={"start"} className={className}>
      <MoxAtomRadioButton id={id} />
      <MoxTextBlock as="label" htmlFor={id}>
        {children}
      </MoxTextBlock>
    </MoxShelf>
  );
};
