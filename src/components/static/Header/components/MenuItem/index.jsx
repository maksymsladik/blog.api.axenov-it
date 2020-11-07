import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

function MenuItem({ menuLinks }) {
  return (
    <nav className={style.container__nav}>
      <ul className={style.container__list}>
        {menuLinks.map(({ name, href }) => (
          <li key={href} className={style.container__item}>
            <NavLink
              exact
              to={href}
              activeClassName={style.active}
              className={style.container__link}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

MenuItem.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default MenuItem;
