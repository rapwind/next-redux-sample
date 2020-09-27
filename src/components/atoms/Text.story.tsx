/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import TextAtom from "./Text";

export default {
  title: "Atoms",
  component: TextAtom,
  decorators: [withKnobs],
};

export const Text = (): JSX.Element => (
  <TextAtom>{text("text", "Text")}</TextAtom>
);
