import React, { PropsWithChildren } from "react";
import Link from "next/link";

import css from "./aside.module.css";

interface AsideMenuItemProps {
  href?: string;
}

const AsideMenuItem: React.FC<PropsWithChildren<AsideMenuItemProps>> = ({
  children,
  href,
}) => {
  return (
    <li>
      {href ? (
        <Link href={href} className={css.asideMenuItem}>
          {children}
        </Link>
      ) : (
        <div className={css.asideMenuItem}>{children}</div>
      )}
    </li>
  );
};

const AsideMenu = ({ children }: PropsWithChildren) => {
  return <ul>{children}</ul>;
};

AsideMenu.Item = AsideMenuItem;

export default AsideMenu;
