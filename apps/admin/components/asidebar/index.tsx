import React from "react";
import Link from "next/link";

import css from './aside.module.css'

const AsideBar = () => {
  return (
    <aside
      id="aside"
      className={css.aside}
    >
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideBar;
