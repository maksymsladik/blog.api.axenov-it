import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAction, fetchAddPostAction } from "./redux/asyncAction";
import List from "./components/List";
import Button from "../../modules/Button";
import style from "./style.module.css";
import AddPostForm from "./components/AddPostForm";

function Posts(props) {
  const {
    fetchPosts,
    fetchAddPost,
    pagination,
    isFetchLoadPosts,
    posts,
  } = props;

  const [isShowAddForm, setIsShowAddForm] = useState(false);

  const onVerticallPagination = () => {
    const pageYOffset = window.pageYOffset;
    const innerHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight - 400;
    const pageYOffsetInnerHeight = pageYOffset + innerHeight;
    if (pageYOffsetInnerHeight > scrollHeight) {
      fetchPosts(pagination.page + 1, pagination.limit);
      window.onscroll = null;
    }
  };

  useEffect(() => {
    window.onscroll = onVerticallPagination;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  useEffect(() => {
    fetchPosts(pagination.page, pagination.limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Button
          type="btn"
          title="Add post"
          className="btn__add"
          onClick={toggleAddForm}
        />
      </div>
      {isFetchLoadPosts && (
        <div className={style.home__loading}>Loading...</div>
      )}
      <List posts={posts} />
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
    isFetchLoadPosts: state.posts.isFetchLoadPosts,
    posts: state.posts.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
