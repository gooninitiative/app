import React, { PropsWithChildren } from "react";

import css from "./aside.module.css";

export default function AsideTitle({ children }: PropsWithChildren) {
  return (
    <div
      className={css.asideMenuTitle}
      style={{
        fontSize: "11px",
        lineHeight: "1",
      }}
    >
      {children}
    </div>
  );
}
