import RequestApi from "../../../../lib/RequestApi";
import {
  setPostAction,
  updatedFormAction,
  showSuccessMessageAction,
  showErrorMessageAction,
} from "./actionsTypes";

export const fetchPostAction = (dispatch, postId) => {
  return RequestApi.getPost(postId).then((data) => {
    if (data.result) {
      dispatch(setPostAction(data.post));
    }
  });
};

export const fetchDeletePostAction = (postId, history) => {
  return RequestApi.deletePost(postId).then((data) => {
    if (data.result) {
      history.push("/");
    }
  });
};

function isValidEditForm(fields, editBtn) {
  if (!editBtn) return false;
  return !fields.find((field) => !field.isValid);
}

export const fetchUpdatePostAction = (dispatch, fields, postId, editBtn) => {
  if (!editBtn) {
    return null;
  } else if (!isValidEditForm(fields, editBtn)) {
    dispatch(showErrorMessageAction(true));
    setTimeout(() => dispatch(showErrorMessageAction(false)), 2000);
    return false;
  }

  const fetchFields = fields.reduce((ac, field) => {
    ac[field.name] = field.value;
    return ac;
  }, {});

  return RequestApi.updatePost(fetchFields, postId).then(() => {
    dispatch(showSuccessMessageAction(true));
    setTimeout(() => dispatch(updatedFormAction()), 2000);
  });
};
