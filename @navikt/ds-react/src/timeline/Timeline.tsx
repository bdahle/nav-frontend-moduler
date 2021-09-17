import React, { forwardRef, HTMLAttributes } from "react";
import cl from "classnames";
import TimelineRow, { TimelineRowType } from "./TimeLineRow";

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Timeline
   */
  children: React.ReactNode;
  /**
   * Changes background-color and border-color
   *
   */
  /* variant: "warning" | "error" | "info" | "success"; */
  /**
   * Changes sizing of Timeline
   * @default "medium"
   */
  size?: "medium" | "small";
}

interface TimelineComponent
  extends React.ForwardRefExoticComponent<
    TimelineProps & React.RefAttributes<HTMLDivElement>
  > {
  Row: TimelineRowType;
}

const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, size = "medium", ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={cl("navds-timeline", className, `navds-timeline--${size}`)}
      >
        {children}
      </div>
    );
  }
) as TimelineComponent;

Timeline.Row = TimelineRow;

export default Timeline;
