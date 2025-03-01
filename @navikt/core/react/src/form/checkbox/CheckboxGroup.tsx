import React, { createContext, forwardRef, useContext, useState } from "react";
import cl from "classnames";
import { Fieldset, FieldsetProps, FieldsetContext } from "..";

export interface CheckboxGroupState {
  readonly defaultValue?: readonly string[];
  readonly value?: readonly string[];
  toggleValue(value: string): void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupState | null>(
  null
);

export interface CheckboxGroupProps
  extends Omit<FieldsetProps, "onChange" | "errorPropagation"> {
  /**
   * Checkboxes
   */
  children: React.ReactNode;
  /**
   * Controlled state for group
   */
  value?: string[];
  /**
   * Default checked checkboxes on render
   */
  defaultValue?: string[];
  /**
   * Returns current checked checkboxes in group
   */
  onChange?: (value: string[]) => void;
}

const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    { value, defaultValue, onChange = () => {}, children, className, ...rest },
    ref
  ) => {
    const fieldset = useContext(FieldsetContext);

    const [state, setState] = useState<string[]>([]);

    const handleChange = (v: string) => {
      const newValue = value ? value : state;
      const newState = newValue.includes(v)
        ? newValue.filter((x) => x !== v)
        : [...newValue, v];

      value === undefined && setState(newState);
      onChange(newState);
    };

    return (
      <Fieldset
        {...rest}
        ref={ref}
        className={cl(
          className,
          "navds-checkbox-group",
          `navds-checkbox-group--${rest.size ?? fieldset?.size ?? "medium"}`
        )}
      >
        <CheckboxGroupContext.Provider
          value={{
            value,
            defaultValue,
            toggleValue: (value: string) => handleChange(value),
          }}
        >
          <div className="navds-checkboxes">{children}</div>
        </CheckboxGroupContext.Provider>
      </Fieldset>
    );
  }
);

export default CheckboxGroup;
