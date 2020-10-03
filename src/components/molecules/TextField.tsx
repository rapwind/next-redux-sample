// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import styles from "./TextField.module.css";
import TextInput from "~/components/atoms/TextInput";
import Label from "~/components/atoms/Label";
import Text from "~/components/atoms/Text";

type Props = {
  label?: string;
  value?: string;
  errorMessage?: string;
};

const TextField: FC<Props> = ({ label, value, errorMessage }) => (
  <Label className={styles.textField} data-testid="text-field">
    <Text className={styles.textFieldLabel}>{label}</Text>
    <TextInput value={value} />
    {errorMessage && (
      <Text className={styles.textFieldErrorMessage}>{errorMessage}</Text>
    )}
  </Label>
);
export default TextField;
