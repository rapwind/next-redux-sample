// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import classNames from "classnames";
import NextLink from "next/link";
import styles from "./Link.module.css";

type Props = {
  className?: string;
  href: string;
  as?: string;
  prefetch?: boolean;
};

const Link: FC<Props> = ({ children, className, href, as, prefetch }) => (
  <NextLink href={href} as={as} prefetch={prefetch || false}>
    <a className={classNames(styles.link, className)}>{children}</a>
  </NextLink>
);
export default Link;
