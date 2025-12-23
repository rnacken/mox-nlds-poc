import type { ElementType } from "react";
import type { AtomProps } from "../AtomTypes";
import clsx from "clsx";

/**
 * **⚠️ Warning:**
 * You'll probably want to use:
 * - The **Molecule** `RadioButtonField`, with a label
 * - The **Organism** `RadioButtonField`, with label, explanation and error-message.
 *
 * ---
 *
 * A Single radio button input element.
 * This Atom is not responsible for labels, explanations or error-messages.
 *
 * Responsibilities:
 * 1. Render a radio button input element.
 *
 * Not responsible for:
 * 1. Labels, explanations or error-messages.
 */

export const MoxAtomRadioButton = (props: AtomProps<"input", {}>) => {
  const { as, className, ref, ...restProps } = props;
  const Component = as || ("input" as ElementType);

  return (
    <Component
      className={clsx("mox-atom-input-radio-button", className)}
      type="radio"
      {...restProps}
    />
  );
};

// The Molecule RadioButton component is exported as `MoxRadioButton`
