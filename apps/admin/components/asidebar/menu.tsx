import React, { PropsWithChildren } from "react";
import Link from "next/link";

import css from "./menu.module.css";

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
        <Link href={href} className={css.menuItem}>
          {children}
        </Link>
      ) : (
        <div className={css.menuItem}>{children}</div>
      )}
    </li>
  );
};

const AsideMenu = ({ children }: PropsWithChildren) => {
  return <ul>{children}</ul>;
};

AsideMenu.Item = AsideMenuItem;

export default AsideMenu;
