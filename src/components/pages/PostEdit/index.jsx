import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchPostAction,
  fetchUpdatePostAction,
  fetchDeletePostAction,
} from "./redux/asyncAction";
import { changeFieldValueAction } from "./redux/actionsTypes";
import List from "./components/List";
import Button from "../../modules/Button";
import Alert from "../../modules/Alert";
import style from "./style.module.css";

function PostEdit(props) {
  const postId = props.match.params.id;

  const {
    fetchPost,
    fetchUpdatePost,
    fields,
    changeFieldValue,
    editBtn,
    isShowSuccessMessage,
    isShowErrorMessage,
    history,
  } = props;

  const classNameBtn = editBtn ? "btn__save" : "btn__disable";

  useEffect(() => {
    fetchPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeField = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    changeFieldValue(value, e.target.name);
  };

  const onSubmitEdit = () => fetchUpdatePost(fields, postId, editBtn);

  const onSubmitDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm("Would you like to delete that post?");
    if (!isDelete) return false;

    fetchDeletePostAction(postId, history);
  };

  return (
    <div className={style.postEdit__form}>
      <h1 className={style.postEdit__title}>Edit post</h1>
      <Alert
        message="Your post updated!"
        isShow={isShowSuccessMessage}
        className="alert__success"
      />
      <Alert
        message="Enter correct data!"
        isShow={isShowErrorMessage}
        className="alert__error"
      />
      <List
        fields={fields}
        onChange={onChangeField}
        classCheckboxName={style.postEdit__checkbox}
      />
      <Button
        title="Save post"
        type="btn"
        onClick={onSubmitEdit}
        styles={style.postEdit__edit}
        className={classNameBtn}
      />
      <Button
        title="Delete post"
        type="btn"
        onClick={onSubmitDelete}
        styles={style.postEdit__delete}
        className="btn__delete"
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (postId) => fetchPostAction(dispatch, postId),

    fetchUpdatePost: (fields, postId, editBtn) =>
      fetchUpdatePostAction(dispatch, fields, postId, editBtn),

    changeFieldValue: (value, name) =>
      dispatch(changeFieldValueAction(value, name)),
  };
};

const mapStateToProps = (state) => {
  return {
    fields: state.postEdit.fields,
    editBtn: state.postEdit.editBtn,
    isShowSuccessMessage: state.postEdit.isShowSuccessMessage,
    isShowErrorMessage: state.postEdit.isShowErrorMessage,
  };
};

PostEdit.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  fetchUpdatePost: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  editBtn: PropTypes.bool.isRequired,
  isShowSuccessMessage: PropTypes.bool.isRequired,
  isShowErrorMessage: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
