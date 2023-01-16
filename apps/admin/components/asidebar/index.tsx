import React from "react";
import {
  Grid,
  People,
  Chat,
  ChatSquareQuote,
  Gear,
} from "react-bootstrap-icons";

import css from "./aside.module.css";
import AsideDivider from "./divider";
import AsideMenu from "./menu";
import AsideTitle from "./title";
import AsideUserBar from "./user-bar";

const AsideBar = () => {
  return (
    <aside id="aside" className={css.aside}>
      {/* User */}
      <AsideUserBar />

      {/* Content */}
      <div className="aside-content">
        <AsideDivider />
        <AsideMenu>
          <AsideMenu.Item href="/" icon={<Grid />}>
            Dashboard
          </AsideMenu.Item>
          <AsideMenu.Item href="/" icon={<Grid />}>
            Analytics
          </AsideMenu.Item>
        </AsideMenu>

        <AsideDivider />
        <AsideTitle>Posts</AsideTitle>
        <AsideMenu>
          <AsideMenu.Item href="/" icon={<Grid />}>
            Posts
          </AsideMenu.Item>
          <AsideMenu.Item href="/" icon={<Grid />}>
            Categories
          </AsideMenu.Item>
          <AsideMenu.Item href="/" icon={<Chat />}>
            Comments
          </AsideMenu.Item>
        </AsideMenu>

        <AsideDivider />
        <AsideMenu>
          <AsideMenu.Item href="/" icon={<People />}>
            Users
          </AsideMenu.Item>
          <AsideMenu.Item href="/" icon={<ChatSquareQuote />}>
            Surveys
          </AsideMenu.Item>
          <AsideMenu.Item href="/" icon={<Gear />}>
            Settings
          </AsideMenu.Item>
        </AsideMenu>
      </div>
    </aside>
  );
};

export default AsideBar;
