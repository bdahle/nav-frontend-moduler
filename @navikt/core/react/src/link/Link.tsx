import React, { forwardRef } from "react";
import cl from "classnames";
import { OverridableComponent } from "..";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link text
   */
  children: React.ReactNode;
}

const Link: OverridableComponent<
  LinkProps,
  HTMLAnchorElement
> = forwardRef(({ as: Component = "a", className, ...rest }, ref) => (
  <Component {...rest} ref={ref} className={cl("navds-link", className)} />
));

export default Link;
