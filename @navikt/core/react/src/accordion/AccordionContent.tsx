import cl from "classnames";
import React, { forwardRef, useContext } from "react";
import { Collapse, UnmountClosed } from "react-collapse";
import { AccordionItemContext } from "./AccordionItem";

export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Accordion panel content
   */
  children: React.ReactNode;
}

export type AccordionContentType = React.ForwardRefExoticComponent<
  AccordionContentProps & React.RefAttributes<HTMLDivElement>
>;

const AccordionContent: AccordionContentType = forwardRef(
  ({ children, className, id, ...rest }, ref) => {
    const context = useContext(AccordionItemContext);

    if (context === null) {
      console.error(
        "<Accordion.Content> has to be used within an <Accordion.Item>"
      );
      return null;
    }

    const CollapseComponent = context.renderContentWhenClosed
      ? Collapse
      : UnmountClosed;

    return (
      <div ref={ref} role="region" aria-labelledby={context.buttonId} {...rest}>
        <CollapseComponent isOpened={context.open}>
          <div className={cl("navds-accordion__content", className)}>
            {children}
          </div>
        </CollapseComponent>
      </div>
    );
  }
);

export default AccordionContent;
