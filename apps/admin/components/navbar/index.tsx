import React from "react";
import { List } from "react-bootstrap-icons";

type NavBarProps = {
  asideToggle: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ asideToggle }) => {
  return (
    <nav className="container flex items-center justify-between py-8">
      <button
        onClick={() => {
          asideToggle();
        }}
      >
        <List />
      </button>
      <form>
        <input type="text" placeholder="Search anything" />
      </form>
    </nav>
  );
};

export default NavBar;
