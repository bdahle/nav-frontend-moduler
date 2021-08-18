import React from "react";
import { AnchorLink } from "../index";
import { Meta } from "@storybook/react/types-6-0";
export default {
  title: "ds-react/anchor-link",
  component: AnchorLink,
} as Meta;

export const All = () => {
  return (
    <div>
      <h1>AnchorLink</h1>
      <AnchorLink href="#123">Kopier lenke</AnchorLink>
    </div>
  );
};
