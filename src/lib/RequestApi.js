import Request from "./Request";

class RequestApi {
  static getPosts(page = 1, limit = 12) {
    return new Request("posts").setParams({ page, limit }).send();
  }

  static getPost(postId) {
    return new Request(`posts/${postId}`).send();
  }

  static deletePost(postId) {
    return new Request(`posts/${postId}`).setMethod("DELETE").send();
  }

  static addPost(fields) {
    const postFetch = {
      title: fields.title,
      short_description: fields.short_description,
      full_description: "default full description",
      status: true,
      seo_url: "",
    };
    return new Request(`posts`).setMethod("POST").setBody(postFetch).send();
  }

  static updatePost(post, postId) {
    return new Request(`posts/${postId}`).setMethod("PUT").setBody(post).send();
  }
}

export default RequestApi;
