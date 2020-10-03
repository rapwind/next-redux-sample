// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

type Props = {
  className?: string;
};

const Button: FC<Props> = ({ children, className }) => (
  <button className={classNames(styles.button, className)} data-testid="button">
    {children}
  </button>
);
export default Button;
