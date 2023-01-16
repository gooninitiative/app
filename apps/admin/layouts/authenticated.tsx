import React, { PropsWithChildren, useRef } from "react";
import clsx from "clsx";

import css from "./authenticated.module.css";
import NavBar from "../components/navbar";
import AsideBar from "../components/asidebar";

const LayoutAuthenticated: React.FC<PropsWithChildren> = ({ children }) => {
  const isAsideMobileExpanded = useRef<boolean>(false);

  const toggleAsideBarExpand = () => {
    isAsideMobileExpanded.current = !isAsideMobileExpanded.current;
  };

  return (
    <div
      className={clsx(
        css.layout,
        isAsideMobileExpanded.current && "aside-expanded"
      )}
    >
      {/* Toppanel */}
      <NavBar asideToggle={toggleAsideBarExpand} />

      {/* AsideMenu */}
      <AsideBar />

      {/* Body */}
      <main className={css.main}>{children}</main>

      {/* Footer */}
      <footer className="container py-6">
        <p>©2023, Goon Initiative.</p>
      </footer>
    </div>
  );
};

export default LayoutAuthenticated;
