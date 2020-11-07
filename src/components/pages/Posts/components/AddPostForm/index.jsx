import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../../../modules/Button";
import dataFields from "./fields.json";
import List from "./components/List";
import style from "./style.module.css";

function AddPostForm({ isShow, onSubmit, onCancel }) {
  const [fields, setFields] = useState(dataFields);

  useEffect(() => {
    setFields(dataFields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  const onCloseForm = () => {
    onCancel();
  };

  const onSubmitForm = () => {
    const isValid = !fields.find((field) => !field.isValid);
    onSubmit(fields, isValid);
  };

  const onValidatePost = (value, regex) => {
    const regExp = new RegExp(regex);
    return regExp.test(value);
  };

  const onChangePost = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const indexField = fields.findIndex(({ name }) => name === inputName);
    const targetField = fields[indexField];

    const isValid = onValidatePost(inputValue, targetField.regex);

    const updatedField = {
      ...targetField,
      value: inputValue,
      isValid,
    };

    const newFields = [...fields];
    newFields[indexField] = updatedField;

    setFields(newFields);
  };

  if (!isShow) return null;

  return (
    <div className={style.addPostForm}>
      <form className={style.addPostForm__container}>
        <List fields={fields} onChange={onChangePost} />

        <Button
          type="btn"
          onClick={onSubmitForm}
          title="Create post"
          className="btn__create"
        />

        <Button
          type="btn"
          onClick={onCloseForm}
          title="Cancel"
          className="btn__cancel"
        />
      </form>
    </div>
  );
}

AddPostForm.propTypes = {
  isShow: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AddPostForm;
