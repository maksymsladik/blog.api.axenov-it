export const SET_POSTS = "SET_POSTS";
export const CHANGE_PAGINATION = "CHANGE_PAGINATION";

export const setPostsAction = (posts) => ({ type: SET_POSTS, posts });

export const changePaginationAction = (pagination) => ({
  type: CHANGE_PAGINATION,
  pagination,
});
