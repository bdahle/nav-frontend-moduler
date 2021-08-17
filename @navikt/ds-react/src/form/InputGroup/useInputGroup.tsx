import { InputGroupContext } from "./InputGroup";
import { useContext } from "react";
/**
 * Handles props for Fieldset in context with parent Fieldset.
 */
export const useInputGroup = () => {
  const inputGroup = useContext(InputGroupContext);

  return inputGroup && { inputProps: inputGroup.inputProps };
};
