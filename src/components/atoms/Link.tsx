// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import NextLink from "next/link";
import styles from "./Link.module.css";

type Props = {
  href: string;
  as?: string;
  prefetch? :boolean;
};

const Link: FC<Props> = ({ href, as, prefetch, children }) => (
  <NextLink
    href={href}
    as={as}
    prefetch={prefetch || false}
  >
    <a className={styles.link}>{children}</a>
  </NextLink>
);
export default Link;
