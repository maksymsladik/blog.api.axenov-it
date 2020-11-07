import React from "react";
import MenuItem from "./components/MenuItem";
import menuLinks from "./components/MenuItem/menuLinks.json";
import style from "./style.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <MenuItem menuLinks={menuLinks} />
      </div>
    </header>
  );
}

export default Header;
