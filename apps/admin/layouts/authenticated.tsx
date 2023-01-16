import React, { PropsWithChildren } from "react";

import NavBar from "@/components/navbar";
import AsideBar from "@/components/asidebar";

const LayoutAuthenticated: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full pl-60">
      {/* Toppanel */}
      <NavBar />

      {/* AsideMenu */}
      <AsideBar />

      {/* Body */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <div className="block items-center justify-between md:flex">
          <div className="text-left">
            <b>©2023, Goon Initiative.</b>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LayoutAuthenticated;
