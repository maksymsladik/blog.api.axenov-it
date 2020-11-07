import { combineReducers } from "redux";
import posts from "../components/pages/Posts/redux/reducer";
import postEdit from "../components/pages/PostEdit/redux/reducer";

const mainReducer = combineReducers({
  posts,
  postEdit,
});

export default mainReducer;
