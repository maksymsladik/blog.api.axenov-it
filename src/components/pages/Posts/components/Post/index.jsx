import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getDate } from "../../../../../lib/helpers";
import style from "./style.module.css";

function Post({ title, shortDescription, dateUpdate, id }) {
  return (
    <div className={style.post}>
      <div className={style.post__info}>
        <span className={style.post__date}>{getDate(dateUpdate.date)}</span>
        <span className={style.post__edit}>
          <Link to={`/post/edit/${id}`}>Edit</Link>
        </span>
      </div>

      <h2 className={style.post__title}>
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      <p className={style.post__desc}>
        {shortDescription}
        <Link to={`/post/${id}`}> ...more</Link>
      </p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  dateUpdate: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
