import React from "react";

type NavBarProps = {
  asideToggle: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ asideToggle }) => {
  return (
    <nav>
      <button
        onClick={() => {
          asideToggle();
        }}
      >
        Toggle aside
      </button>
      <form>
        <input type="text" placeholder="Search anything" />
      </form>
    </nav>
  );
};

export default NavBar;
