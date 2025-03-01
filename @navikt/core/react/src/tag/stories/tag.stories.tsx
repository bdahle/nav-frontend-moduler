import React from "react";
import { Tag } from "../index";
import { Meta } from "@storybook/react/types-6-0";
export default {
  title: "ds-react/tag",
  component: Tag,
} as Meta;

export const All = () => {
  return (
    <div>
      <h1>Tag</h1>
      <Tag variant="info"> Info tag</Tag>
      <Tag variant="warning"> Warning tag</Tag>
      <Tag variant="success"> Success tag</Tag>
      <Tag variant="error">Error tag</Tag>
      <h1>Tag small</h1>
      <Tag variant="info" size="small">
        Info tag
      </Tag>
      <Tag variant="warning" size="small">
        Warning tag
      </Tag>
      <Tag variant="success" size="small">
        Success tag
      </Tag>
      <Tag variant="error" size="small">
        Error tag
      </Tag>
    </div>
  );
};
