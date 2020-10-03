// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";

type Props = {
  className?: string;
};

const Text: FC<Props> = ({ children, className }) => (
  <span className={className} data-testid="text">
    {children}
  </span>
);
export default Text;
