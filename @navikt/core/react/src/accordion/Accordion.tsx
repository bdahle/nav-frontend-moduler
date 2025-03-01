import cl from "classnames";
import React, { forwardRef } from "react";
import AccordionItem, { AccordionItemType } from "./AccordionItem";
import AccordionContent, { AccordionContentType } from "./AccordionContent";
import AccordionHeader, { AccordionHeaderType } from "./AccordionHeader";

interface AccordionComponent
  extends React.ForwardRefExoticComponent<
    AccordionProps & React.RefAttributes<HTMLDivElement>
  > {
  Item: AccordionItemType;
  Header: AccordionHeaderType;
  Content: AccordionContentType;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content inside accordion
   */
  children: React.ReactNode;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, ...rest }, ref) => (
    <div {...rest} className={cl("navds-accordion", className)} ref={ref} />
  )
) as AccordionComponent;

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
Accordion.Item = AccordionItem;

export default Accordion;
