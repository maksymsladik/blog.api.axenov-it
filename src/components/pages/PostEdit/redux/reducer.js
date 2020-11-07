import {
  SET_EDIT_POST,
  CHANGE_FIELD_VALUE,
  UPDATED_FORM,
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "./actionsTypes";
import fields from "./fields.json";

export const initialState = {
  fields,
  editBtn: false,
  isShowSuccessMessage: false,
  isShowErrorMessage: false,
};

const onValidatePost = (value, regex) => {
  const regExp = new RegExp(regex);
  return regExp.test(value);
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_EDIT_POST: {
      return {
        ...state,
        fields: state.fields.map((field) => {
          return {
            ...field,
            value: action.post[field.name],
          };
        }),
      };
    }

    case SHOW_SUCCESS_MESSAGE: {
      return {
        ...state,
        isShowSuccessMessage: action.status,
      };
    }

    case SHOW_ERROR_MESSAGE: {
      return {
        ...state,
        isShowErrorMessage: action.status,
      };
    }

    case UPDATED_FORM: {
      return {
        ...state,
        editBtn: false,
        isShowSuccessMessage: false,
      };
    }

    case CHANGE_FIELD_VALUE: {
      return {
        ...state,
        fields: state.fields.map((field) => {
          if (field.name === action.name) {
            return {
              ...field,
              value: action.value,
              isValid: field.regex
                ? onValidatePost(action.value, field.regex)
                : true,
            };
          }
          return field;
        }),
        editBtn: true,
      };
    }

    default:
      return state;
  }
}
