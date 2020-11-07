import { SET_POSTS, CHANGE_PAGINATION } from "./actionsTypes";

export const initialState = {
  data: [],
  isShowAddForm: false,
  pagination: {
    page: 1,
    limit: 12,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        data: action.posts,
      };
    }

    case CHANGE_PAGINATION: {
      return {
        ...state,
        pagination: { ...state.pagination, ...action.pagination },
      };
    }

    default:
      return state;
  }
}
