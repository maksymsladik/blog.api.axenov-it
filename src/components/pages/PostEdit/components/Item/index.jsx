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
  classCheckboxName,
}) {
  let inputComponent = null;

  if (type === "description") {
    inputComponent = (
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={style[className]}
      />
    );
  } else if (type === "checkbox") {
    inputComponent = (
      <input
        name={name}
        type={type}
        value={value}
        checked={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${style[className]} ${classCheckboxName}`}
      />
    );
  } else {
    inputComponent = (
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={style[className]}
      />
    );
  }

  return (
    <div className={style.form__row}>
      {inputComponent}
      {!isValid && <span className={style.form__error}>{errorText}</span>}
    </div>
  );
}

Item.defaultProps = {
  classCheckboxName: "",
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorText: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  classCheckboxName: PropTypes.string,
};

export default Item;
