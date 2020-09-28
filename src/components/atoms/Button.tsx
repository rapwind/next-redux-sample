// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import styles from "./Button.module.css";

const Button: FC = ({ children }) => <button className={styles.button} data-testid="button">{children}</button>;
export default Button;
