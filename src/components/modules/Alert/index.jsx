import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function Alert({ isShow, message, className, styles }) {
  if (!isShow) return null;

  const classNameMessage = styles
    ? `${style[className]} ${styles}`
    : style[className];

  return (
    <div className={style.alert}>
      <div className={classNameMessage}>{message}</div>
    </div>
  );
}

Alert.defaultProps = {
  styles: "",
};

Alert.propTypes = {
  isShow: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

export default Alert;
