import { useId } from "react";
import { MoxAtomCheckbox } from "../../uiAtoms/form/Checkbox";
import { MoxShelf } from "../../uiAtoms/layout/Shelf";

/**
 * Checkbox component with a label.
 *
 * If you want a component with an error-message and explanation options, use the Organism `MoxCheckboxField`.
 *
 * Responsibilities:
 */
export const MoxMoleculeCheckboxField = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const id = useId();

  return (
    <MoxShelf>
      <MoxAtomCheckbox id={id} />
      <label htmlFor={id}>{children}</label>
    </MoxShelf>
  );
};
