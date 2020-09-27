// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import NextLink from "next/link";

type Props = {
  href?: string;
  as?: string;
};

const Link: FC<Props> = ({ href, as, children }) => (
  <NextLink href={href} as={as}>
    <a>{children}</a>
  </NextLink>
);
export default Link;
