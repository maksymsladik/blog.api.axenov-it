import RequestApi from "../../../../lib/RequestApi";
import { setPostsAction, changePaginationAction } from "./actionsTypes";

export const fetchPostsAction = (dispatch, page, limit) => {
  RequestApi.getPosts(page, limit).then((data) => {
    if (data.result) {
      dispatch(changePaginationAction({ page, limit }));
      dispatch(setPostsAction(data.posts));
    }
  });
};

export const fetchAddPostAction = (fields, dispatch) => {
  const fetchFields = fields.reduce((ac, field) => {
    ac[field.name] = field.value;
    return ac;
  }, {});

  return RequestApi.addPost(fetchFields).then((response) => {
    if (response.result) {
      fetchPostsAction(dispatch, 1, 12);
      return true;
    }
    return false;
  });
};
