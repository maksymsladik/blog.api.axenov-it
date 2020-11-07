import { setPostsAction, SET_POSTS } from "../redux/actionsTypes";
import { posts } from "../mock";

describe("TEST OF POSTS ACTIONTYPES", () => {
  test("Test actionsTypes", () => {
    expect(setPostsAction(posts)).toEqual({ type: SET_POSTS, posts });
  });
});
