import React from "react";
import PropTypes from "prop-types";
import Post from "../Post";
import style from "./style.module.css";

function List({ posts }) {
  return (
    <div className={style.home__list}>
      {posts.map((post) => (
        <Post
          title={post.title}
          shortDescription={post.short_description}
          dateUpdate={post.date_update}
          id={post.id}
          key={post.id}
        />
      ))}
    </div>
  );
}

List.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date_update: PropTypes.object.isRequired,
      full_description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      seo_url: PropTypes.string.isRequired,
      short_description: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      user_id: PropTypes.number.isRequired,
    })
  ),
};

export default List;
