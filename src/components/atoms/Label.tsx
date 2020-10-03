// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Label.module.css";

type Props = {
  className?: string;
};

const Label: FC<Props> = ({ children, className }) => (
  <label className={classNames(styles.label, className)} data-testid="label">
    {children}
  </label>
);
export default Label;
