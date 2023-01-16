import React from "react";
import { ChevronDown } from "react-bootstrap-icons";

import css from "./aside.module.css";
import AsideDivider from "./divider";
import AsideMenu from "./menu";
import AsideTitle from "./title";

const AsideBar = () => {
  return (
    <aside id="aside" className={css.aside}>
      {/* User */}
      <div className="aside-user p-2">
        <div className="relative flex items-center justify-between p-2 rounded-md bg-orange-500 text-white">
          <div className="info flex items-start">
            <div className="avatar w-12 h-12 rounded-full bg-gray-100" />
            <div className="meta ml-2">
              <p><b>Emmanuel K.</b></p>
              <p>Administrator</p>
            </div>
          </div>
          <button className="toggler p-2">
            <ChevronDown />
          </button>
          <ul className="collapse absolute left-0 right-0 top-full">
            <li>
              <a className="block text-orange-900" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="aside-content">
        <AsideDivider />
        <AsideMenu>
          <AsideMenu.Item href="/">
            Dashboard
          </AsideMenu.Item>
          <AsideMenu.Item href="/">
            Analytics
          </AsideMenu.Item>
        </AsideMenu>

        <AsideDivider />
        <AsideTitle>Posts</AsideTitle>
        <AsideMenu>
          <AsideMenu.Item href="/">
            Posts
          </AsideMenu.Item>
          <AsideMenu.Item href="/">
            Categories
          </AsideMenu.Item>
          <AsideMenu.Item href="/">
            Comments
          </AsideMenu.Item>
        </AsideMenu>

        <AsideDivider />
        <AsideMenu>
          <AsideMenu.Item href="/">
            Users
          </AsideMenu.Item>
          <AsideMenu.Item href="/">
            Surveys
          </AsideMenu.Item>
          <AsideMenu.Item href="/">
            Settings
          </AsideMenu.Item>
        </AsideMenu>
      </div>
    </aside>
  );
};

export default AsideBar;
