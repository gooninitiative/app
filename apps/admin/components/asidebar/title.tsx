import React, { PropsWithChildren } from "react";

export default function AsideTitle({ children }: PropsWithChildren) {
  return (
    <div
      className="uppercase tracking-widest text-gray-600"
      style={{
        fontSize: "11px",
        lineHeight: "1",
      }}
    >
      {children}
    </div>
  );
}
