import { Link, LinkFilled } from "@navikt/ds-icons";
import cl from "classnames";
import copy from "copy-to-clipboard";
import React, {
  AnchorHTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from "react";
import mergeRefs from "react-merge-refs";
import { Popover } from "../popover";

export interface AnchorLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Anchor content
   */
  children: React.ReactNode;
  /**
   * Popover text
   * @default "kopiert"
   */
  popoverText?: string;
  /**
   * Requires href to be set on link
   */
  href: string;
}

const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  ({ children, className, popoverText = "Kopiert", ...rest }, ref) => {
    const anchorRef = useRef<HTMLAnchorElement>(null);
    const mergedRef = mergeRefs([anchorRef, ref]);

    const [open, setOpen] = useState(false);

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      e.preventDefault();
      copy(getLink(), {
        format: "text/plain",
      });
      setOpen(true);
      rest.onClick && rest.onClick(e);
    };

    const getLink = () => {
      const { href, hash } = window.location;
      const urlWithoutHash = href.replace(hash, "");
      return `${urlWithoutHash}${rest.href}`;
    };

    return (
      <a
        ref={mergedRef}
        className={cl("navds-anchor-link", className, "navds-detail")}
        onClick={(e) => handleClick(e)}
        {...rest}
      >
        <span className="navds-anchor-link__icon">
          <Link className="navds-anchor-link__icon--regular" />
          <LinkFilled className="navds-anchor-link__icon--filled" />
        </span>
        {children}
        <Popover
          anchorEl={anchorRef.current}
          open={open}
          onClose={() => setOpen(false)}
          placement="right"
          arrow={false}
          className="navds-anchor-link__popover navds-detail navds-detail"
        >
          {popoverText}
        </Popover>
      </a>
    );
  }
);

export default AnchorLink;
