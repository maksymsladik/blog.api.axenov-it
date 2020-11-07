import { changeFieldValueAction } from "../redux/actionsTypes";
import PostEditReducer, { initialState } from "../redux/reducer";
import { value, name } from "../mock";

describe("TEST OF EDITPOST REDUCER", () => {
  test("Test reducer", () => {
    expect(PostEditReducer(undefined, { type: null })).toEqual(initialState);
  });

  test("Test reducer result", () => {
    expect(
      PostEditReducer(initialState, changeFieldValueAction(value, name))
    ).toEqual({
      ...initialState,
      fields: initialState.fields.map((field) => {
        if (field.name === name) {
          return {
            ...field,
            value: value,
          };
        }
        return field;
      }),
      editBtn: true,
    });
  });
});
