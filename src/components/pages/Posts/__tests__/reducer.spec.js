import { setPostsAction } from "../redux/actionsTypes";
import PostsReducer, { initialState } from "../redux/reducer";
import { posts } from "../mock";

describe("TEST OF POSTS REDUCER", () => {
  test("Test reducer", () => {
    expect(PostsReducer(undefined, { type: null })).toEqual(initialState);
  });

  test("Test reducer result", () => {
    expect(PostsReducer(initialState, setPostsAction(posts))).toEqual({
      ...initialState,
      data: posts,
    });
  });
});
