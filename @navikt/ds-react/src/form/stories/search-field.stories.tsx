import React from "react";
import { SearchField, TextField } from "../index";
import { Button } from "../../index";
import { Meta } from "@storybook/react/types-6-0";
import { Search } from "@navikt/ds-icons";
export default {
  title: "ds-react/form/search-field",
  component: SearchField,
} as Meta;

export const All = () => {
  return (
    <div style={{ maxWidth: 400 }}>
      <h1>TextField</h1>
      <h2>TextField with button</h2>

      <div style={{ display: "flex" }}>
        <TextField hideLabel placeholder="søk..." label="Laborum excepteur" />
        <Button>
          <Search /> <span>søk</span>
        </Button>
      </div>

      <SearchField placeholder="søk..." label="Laborum excepteur" />

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

      <h2>ImageProp</h2>

      <SearchField
        label="Laborum excepteur"
        description="Cillum mollit"
        buttonProps={{ children: <span>Søk</span> }}
      />
    </div>
  );
};
