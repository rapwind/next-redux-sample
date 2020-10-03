// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import classNames from "classnames";
import styles from "./TextInput.module.css";

type Props = {
  className?: string;
  value?: string;
};

const TextInput: FC<Props> = ({ className, value }) => (
  <input
    type="text"
    className={classNames(styles.textInput, className)}
    data-testid="text-input"
    value={value}
  />
);
export default TextInput;
