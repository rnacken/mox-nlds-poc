import type { ElementType } from "react";
import type { AtomProps } from "../AtomTypes";

/**
 * **⚠️ Warning:**
 * You'll probably want to use:
 * - The **Molecule** `CheckboxField`, with a label
 * - The **Organism** `CheckboxField`, with label, explanation and error-message.
 *
 * ---
 *
 * A Single checkbox input element.
 * This Atom is not responsible for labels, explanations or error-messages.
 *
 * Responsibilities:
 * 1. Render a checkbox input element.
 *
 * Not responsible for:
 * 1. Labels, explanations or error-messages.
 */

export const MoxAtomCheckbox = (props: AtomProps<"input", {}>) => {
  const { as, className, ref, ...restProps } = props;
  const Component = as || ("div" as ElementType);
  return <Component type="checkbox" {...restProps} />;
};

// The Molecule Checkbox component is exported as `MoxCheckbox`
