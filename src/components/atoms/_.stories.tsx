/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import TextAtom from "./Text";
import LinkAtom from "./Link";
import ButtonAtom from "./Button";
import LabelAtom from "./Label";
import TextInputAtom from "./TextInput";

export default {
  title: "Atoms",
  component: [
    TextAtom,
    LinkAtom,
    ButtonAtom,
    LabelAtom,
    TextInputAtom
  ],
  decorators: [withKnobs],
};

export const Text = (): JSX.Element => (
  <TextAtom>{text("text", "Text")}</TextAtom>
);

export const Link = (): JSX.Element => (
  <LinkAtom href={text("href", "")} as={text("as", "")}>
    {text("text", "Link")}
  </LinkAtom>
);

export const Button = (): JSX.Element => (
  <ButtonAtom>
    {text("button", "Text")}
  </ButtonAtom>
);

export const Label = (): JSX.Element => (
  <LabelAtom>
    {text("label", "Text")}
  </LabelAtom>
);

export const TextInput = (): JSX.Element => (
  <TextInputAtom />
);
