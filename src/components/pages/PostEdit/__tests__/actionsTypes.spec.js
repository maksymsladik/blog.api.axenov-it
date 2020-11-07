import {
  changeFieldValueAction,
  CHANGE_FIELD_VALUE,
} from "../redux/actionsTypes";
import { value, name } from "../mock";

describe("TEST OF EDITPOST ACTIONTYPES", () => {
  test("Test actionsTypes", () => {
    expect(changeFieldValueAction(value, name)).toEqual({
      type: CHANGE_FIELD_VALUE,
      value,
      name,
    });
  });
});
