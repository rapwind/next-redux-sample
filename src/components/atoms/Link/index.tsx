import { FC } from "react";
import Link from "next/link";

type Props = {
  href?: string;
  as?: string;
};

const LinkAtom: FC<Props> = ({ href, as, children }) => (
  <Link href={href} as={as}>
    <a>{children}</a>
  </Link>
);
export default LinkAtom;
