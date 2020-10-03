/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import TextFieldMolecule from "./TextField";

export default {
  title: "Molecules",
  component: [TextFieldMolecule],
  decorators: [withKnobs],
};

export const TextField = (): JSX.Element => (
  <TextFieldMolecule
    label={text("label", "Text")}
    errorMessage={text("error message", "Error.")}
  />
);
