import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "ui";

const LayoutAuthenticated: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="h-full"
      style={{
        display: "grid",
        gridTemplateColumns: "235px 1fr",
        gridAutoRows: "min-content",
      }}
    >
      {/* Toppanel */}
      <nav style={{ gridArea: "1 / 2 / 2 / 3" }}>
        <button>Toggle aside</button>
        <form>
          <input type="text" placeholder="Search anything" />
        </form>
      </nav>

      {/* AsideMenu */}
      <aside
        id="aside"
        className="h-full min-h-screen w-[235px] bg-white"
        style={{ gridArea: "1 / 1 / 4 / 2" }}
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
