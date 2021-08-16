import React, { forwardRef } from "react";
import cl from "classnames";
import { TextFieldProps, ButtonProps, BodyShort, Label } from "..";
import { Button } from "../button";
import { Search } from "@navikt/ds-icons";
import ErrorMessage from "./ErrorMessage";
import { useFormField } from "./useFormField";

export interface SearcFieldProps extends TextFieldProps {
  buttonProps?: ButtonProps;
}

const SearchField = forwardRef<HTMLInputElement, SearcFieldProps>(
  ({ buttonProps, ...props }, ref) => {
    const {
      inputProps,
      errorId,
      showErrorMsg,
      hasError,
      size,
      inputDescriptionId,
    } = useFormField(props, "textField");

    const {
      label,
      className,
      description,
      htmlSize,
      hideLabel = false,
      ...rest
    } = props;

    return (
      <div
        className={cl(
          props.className,
          "navds-form-field",
          `navds-form-field--${size}`,
          "navds-search-field",
          `navds-search-field--${size}`,
          { "navds-search-field--error": hasError }
        )}
      >
        <Label
          htmlFor={inputProps.id}
          size={size}
          component="label"
          className={cl("navds-search-field__label", { "sr-only": hideLabel })}
        >
          {label}
        </Label>
        {!!description && (
          <BodyShort
            className={cl("navds-search-field__description", {
              "sr-only": hideLabel,
            })}
            id={inputDescriptionId}
            size={size}
          >
            {description}
          </BodyShort>
        )}
        <div className={cl("navds-search-field__wrapper")}>
          <input
            {...rest}
            {...inputProps}
            ref={ref}
            type="text"
            className={cl(
              className,
              "navds-text-field__input",
              "navds-search-field__input",
              "navds-body-short",
              `navds-body-${size ?? "m"}`
            )}
            size={htmlSize}
          />
          <Button
            className="navds-text-field__button"
            variant="action"
            {...buttonProps}
          >
            <Search />
          </Button>
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

export default SearchField;
