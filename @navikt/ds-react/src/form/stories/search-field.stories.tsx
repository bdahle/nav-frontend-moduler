import React from "react";
import { SearchField } from "../index";
import { Meta } from "@storybook/react/types-6-0";
export default {
  title: "ds-react/form/search-field",
  component: SearchField,
} as Meta;

export const All = () => {
  return (
    <div style={{ maxWidth: 400 }}>
      <h1>TextField</h1>

      <SearchField label="Laborum excepteur" />

      <h2>Description</h2>

      <SearchField label="Laborum excepteur" description="Cillum mollit" />

      <h2>Med placeholder</h2>

      <SearchField
        label="Laborum excepteur"
        description="Cillum mollit"
        placeholder="Ad ex sint"
      />

      <h2>Errors</h2>

      <SearchField
        label="Laborum excepteur"
        description="Cillum mollit"
        error="TextField error"
      />

      <h2>Sizing</h2>

      <SearchField
        size="s"
        label="Laborum excepteur"
        description="Cillum mollit"
        error="TextField error"
      />

      <h2>hideLabel</h2>

      <SearchField
        label="Laborum excepteur"
        description="Cillum mollit"
        hideLabel
      />

      <h2>Disabled</h2>

      <SearchField
        label="Laborum excepteur"
        description="Cillum mollit"
        disabled
      />
    </div>
  );
};
