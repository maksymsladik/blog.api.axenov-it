import { API_KEY, BASE_URL } from "../system/api.config";

class Request {
  constructor(path) {
    this.url = `${BASE_URL}/${path}?api_key=${API_KEY}`;
    this.method = "GET";
    this.body = null;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setBody(body) {
    this.body = JSON.stringify(body);
    return this;
  }

  setParams(params) {
    this.url += Object.keys(params).reduce((ac, key) => {
      ac += `&${key}=${params[key]}`;
      return ac;
    }, "");
    return this;
  }

  send() {
    const options = {};

    options.method = this.method;

    if (this.body) {
      options.body = this.body;
    }

    return fetch(this.url, options).then((response) => response.json());
  }
}

export default Request;
