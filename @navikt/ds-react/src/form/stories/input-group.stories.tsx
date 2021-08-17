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
        label="Søk for sider om foreldrepenger"
        description="Skriv in stikkord om foreldrepenger"
      >
        <div>
          <Search />
        </div>
        <Button variant="action">Søk</Button>
        <TextField label="Textfield label" />
      </InputGroup>

      <h2>InputGroup small</h2>

      <InputGroup
        label="Søk for sider om foreldrepenger"
        description="Skriv in stikkord om foreldrepenger"
        size="s"
      >
        <div>
          <Search />
        </div>
        <Button size="s" variant="action">
          Søk
        </Button>
        <TextField size="s" hideLabel label="Textfield label" />
      </InputGroup>

      <h2>InputGroup m error</h2>

      <InputGroup
        label="Søk for sider om foreldrepenger"
        description="Skriv in stikkord om foreldrepenger"
        error="Errormsg"
      >
        <div>
          <Search />
        </div>
        <TextField hideLabel label="Textfield label" />
        <Button variant="action">Søk</Button>
      </InputGroup>
    </div>
  );
};
