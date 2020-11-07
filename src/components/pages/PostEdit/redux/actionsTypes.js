export const SET_EDIT_POST = "SET_EDIT_POST";
export const UPDATED_FORM = "UPDATED_FORM";
export const SHOW_SUCCESS_MESSAGE = "SHOW_SUCCESS_MESSAGE";
export const SHOW_ERROR_MESSAGE = "SHOW_ERROR_MESSAGE";
export const CHANGE_FIELD_VALUE = "CHANGE_FIELD_VALUE";

export const setPostAction = (post) => ({ type: SET_EDIT_POST, post });

export const updatedFormAction = () => ({ type: UPDATED_FORM });

export const showSuccessMessageAction = (status) => ({
  type: SHOW_SUCCESS_MESSAGE,
  status,
});

export const showErrorMessageAction = (status) => ({
  type: SHOW_ERROR_MESSAGE,
  status,
});

export const changeFieldValueAction = (value, name) => ({
  type: CHANGE_FIELD_VALUE,
  value,
  name,
});
