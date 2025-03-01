import { Helptext as HelpTextIcon } from "@navikt/ds-icons";
import { Placement } from "@popperjs/core";
import cl from "classnames";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import mergeRefs from "react-merge-refs";
import { Popover } from "..";

export interface HelpTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Component content
   */
  children: React.ReactNode;
  /**
   * Placement of popover
   * @default "top"
   */
  placement?: Placement;
}

const HelpText = forwardRef<HTMLButtonElement, HelpTextProps>(
  (
    { className, children, placement = "top", title = "hjelp", ...rest },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const mergedRef = mergeRefs([buttonRef, ref]);
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const [open, setOpen] = useState(false);

    useEffect(() => {
      open && popoverRef.current?.focus();
    }, [open]);

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      setOpen((x) => !x);
      rest.onClick && rest.onClick(e);
    };

    return (
      <div className="navds-help-text" ref={wrapperRef}>
        <button
          {...rest}
          ref={mergedRef}
          onClick={(e) => handleClick(e)}
          className={cl(className, "navds-help-text__button")}
          type="button"
          aria-expanded={open}
          aria-haspopup="dialog"
          title={title}
        >
          <HelpTextIcon className="navds-help-text__icon" />
          <span className="navds-sr-only">{title}</span>
        </button>
        <Popover
          ref={popoverRef}
          onClose={() => setOpen(false)}
          className="navds-help-text__popover"
          open={open}
          role="tooltip"
          anchorEl={buttonRef.current}
          placement={placement}
        >
          <Popover.Content>{children}</Popover.Content>
        </Popover>
      </div>
    );
  }
);

export default HelpText;
