import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function Item({
  name,
  type,
  value,
  placeholder,
  className,
  errorText,
  isValid,
  onChange,
}) {
  const inputComponent =
    type === "description" ? (
      <textarea
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={style[className]}
      />
    ) : (
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={style[className]}
        name={name}
      />
    );

  return (
    <div>
      {inputComponent}
      {!isValid && <span>{errorText}</span>}
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorText: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Item;
