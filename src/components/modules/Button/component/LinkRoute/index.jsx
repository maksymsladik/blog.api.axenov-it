import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./style.module.css";

function LinkRoute({ href, title, className }) {
  return (
    <Link className={style[className]} to={href}>
      {title}
    </Link>
  );
}

LinkRoute.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LinkRoute;
