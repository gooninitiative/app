import React, { PropsWithChildren } from "react";

import css from "./authenticated.module.css";
import NavBar from "../components/navbar";
import AsideBar from "../components/asidebar";

const LayoutAuthenticated: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    // pl-60
    <div className={css.layout}>
      {/* Toppanel */}
      <NavBar />

      {/* AsideMenu */}
      <AsideBar />

      {/* Body */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <div className="container mx-auto items-center justify-between md:flex">
            <b>©2023, Goon Initiative.</b>
        </div>
      </footer>
    </div>
  );
};

export default LayoutAuthenticated;
