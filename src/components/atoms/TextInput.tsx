// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import styles from "./TextInput.module.css";

type Props = {
  value?: string;
};
  
const TextInput: FC<Props> = ({ value }) => <input type="text" className={styles.textInput} data-testid="text-input" value={value} />;
export default TextInput;
