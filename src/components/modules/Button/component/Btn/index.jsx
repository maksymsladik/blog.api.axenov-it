import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function Btn({ onClick, title, className, styles }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${style[className]} ${styles}`}
    >
      {title}
    </button>
  );
}

Btn.defaultProps = {
  styles: "",
};

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

export default Btn;
