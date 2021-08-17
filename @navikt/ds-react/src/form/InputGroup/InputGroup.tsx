import React, { forwardRef } from "react";
import cl from "classnames";
import { BodyShort, Label } from "../..";
import ErrorMessage from "../ErrorMessage";
import { FormFieldProps, useFormField } from "../useFormField";

export interface InputGroupProps
  extends FormFieldProps,
    React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /**
   * If enabled shows the label and description for screenreaders only
   */
  hideLabel?: boolean;
  /**
   * TextField label
   */
  label: React.ReactNode;
}

const TextField = forwardRef<HTMLInputElement, InputGroupProps>(
  (props, ref) => {
    const {
      inputProps,
      errorId,
      showErrorMsg,
      hasError,
      size,
      inputDescriptionId,
    } = useFormField(props, "input-group");

    const {
      label,
      className,
      children,
      description,
      hideLabel = false,
      ...rest
    } = props;

    return (
      <div
        className={cl(
          props.className,
          "navds-form-field",
          `navds-form-field--${size}`,
          { "navds-form-field--error": hasError }
        )}
      >
        <Label
          htmlFor={inputProps.id}
          size={size}
          component="label"
          className={cl("navds-input-group__label", { "sr-only": hideLabel })}
        >
          {label}
        </Label>

        {!!description && (
          <BodyShort
            className={cl("navds-input-group__description", {
              "sr-only": hideLabel,
            })}
            id={inputDescriptionId}
            size={size}
          >
            {description}
          </BodyShort>
        )}
        {/* <input
          {...rest}
          {...inputProps}
          ref={ref}
          type="text"
          className={cl(
            className,
            "navds-text-field__input",
            "navds-body-short",
            `navds-body-${size ?? "m"}`
          )}
          size={htmlSize}
        />  */}
        <div className={cl("navds-input-group", `navds-input-group--${size}`)}>
          {/* {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                ...child.props,
                size: size,
              });
            }
          })} */}
          {children}
        </div>
        <div id={errorId} aria-relevant="additions removals" aria-live="polite">
          {showErrorMsg && (
            <ErrorMessage size={size}>{props.error}</ErrorMessage>
          )}
        </div>
      </div>
    );
  }
);

export default TextField;
