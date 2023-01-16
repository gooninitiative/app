import React, { PropsWithChildren } from "react";
import Link from "next/link";

import css from "./aside.module.css";

interface AsideMenuItemProps {
  href: string;
  icon?: React.ReactElement;
}

const AsideMenuItem: React.FC<PropsWithChildren<AsideMenuItemProps>> = ({
  children,
  icon,
  href,
}) => {
  return (
    <li>
      <Link href={href} className={css.asideMenuItem}>
        <span className="item-content flex items-center">
          {icon}
          <span className="block ml-4">{children}</span>
        </span>
        <span className="item-options flex items-center"></span>
      </Link>
    </li>
  );
};

const AsideMenu = ({ children }: PropsWithChildren) => {
  return <ul>{children}</ul>;
};

AsideMenu.Item = AsideMenuItem;

export default AsideMenu;
