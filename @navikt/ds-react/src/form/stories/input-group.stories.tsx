import React from "react";
import { Fieldset, InputGroup } from "../index";
import { Meta } from "@storybook/react/types-6-0";
import { Button, TextField } from "../../index";
import { Search } from "@navikt/ds-icons";
export default {
  title: "ds-react/form/input-group",
  component: InputGroup,
} as Meta;

export const All = () => {
  return (
    <div>
      <h1>InputGroup</h1>

      <InputGroup
        label="Mollit eiusmod"
        description="Aliqua exercitation cillum pariatur"
      >
        <div>
          <Search />
        </div>
        <TextField label="Textfield label" />
        <Button variant="action">Søk</Button>
      </InputGroup>
    </div>
  );
};
