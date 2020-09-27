/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import LinkAtom from "./Link";

export default {
  title: "Atoms",
  component: LinkAtom,
  decorators: [withKnobs],
};

export const Link = (): JSX.Element => (
  <LinkAtom href={text("href", "")} as={text("as", "")}>
    {text("text", "Link")}
  </LinkAtom>
);
