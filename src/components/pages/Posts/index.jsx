import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchPostsAction, fetchAddPostAction } from "./redux/asyncAction";
import List from "./components/List";
import Button from "../../modules/Button";
import style from "./style.module.css";
import AddPostForm from "./components/AddPostForm";
import Pagination from "./components/Pagination";

function Posts(props) {
  const { fetchPosts, fetchAddPost, pagination } = props;

  const [isShowAddForm, setIsShowAddForm] = useState(false);

  const toggleAddForm = () => setIsShowAddForm(!isShowAddForm);

  const submitAddPostForm = (fields) => {
    fetchAddPost(fields).then(() => {
      toggleAddForm();
    });
  };

  return (
    <div className={style.home}>
      <div className={style.home__nav}>
        <h1 className={style.home__title}>Posts component</h1>
        <Pagination
          onChacge={fetchPosts}
          page={pagination.page}
          limit={pagination.limit}
        />
        <Button
          type="btn"
          title="Add post"
          className="btn__add"
          onClick={toggleAddForm}
        />
      </div>
      <List />
      <AddPostForm
        isShow={isShowAddForm}
        onSubmit={submitAddPostForm}
        onCancel={toggleAddForm}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (page, limit) => fetchPostsAction(dispatch, page, limit),
    fetchAddPost: (fields) => fetchAddPostAction(fields, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    pagination: state.posts.pagination,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
