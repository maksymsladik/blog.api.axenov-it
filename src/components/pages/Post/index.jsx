import React, { useState, useEffect } from "react";
import RequestApi from "../../../lib/RequestApi";
import style from "./style.module.css";

function Post(props) {
  const postId = props.match.params.id;

  const [state, setState] = useState({
    post: [],
  });

  useEffect(() => {
    RequestApi.getPost(postId).then((data) => {
      if (data.result)
        setState({
          ...state,
          post: data.post,
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.post}>
      <h1>Post № {state.post.id}</h1>
      <h1>{state.post.title}</h1>
      <p>{state.post.short_description}</p>
      <p>{state.post.full_description}</p>
    </div>
  );
}

export default Post;
