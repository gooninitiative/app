import React, { PropsWithChildren } from "react"

export default function CardBody({ children }: PropsWithChildren) {
  return <div className="p-6">{children}</div>;
}
