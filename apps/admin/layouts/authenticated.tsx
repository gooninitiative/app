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
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <div className="container items-center justify-between md:flex">
          <b>©2023, Goon Initiative.</b>
        </div>
      </footer>
    </div>
  );
};

export default LayoutAuthenticated;
