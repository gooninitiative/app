import React, { PropsWithChildren } from "react";
import clsx from "clsx";

type CardType = {
  className?: string;
};

const Card: React.FC<PropsWithChildren<CardType>> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx("rounded-md bg-white", className)}>{children}</div>
  );
};
export default Card;
