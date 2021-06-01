import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

// POST
const postNewsBlog = (data) => Post("/", true, data);

// PUT
const putNewsBlog = (data, id) => Put(`/${id}`, true, data);

// DELETE
const deleteNewsBlog = (id) => Delete(`/${id}`, true);

// GET
const getNewsBlog = () => Get("/", true);
const getComment = () =>
  Get("https://jsonplaceholder.typicode.com/comments", false);

const API = {
  getNewsBlog,
  getComment,
  postNewsBlog,
  putNewsBlog,
  deleteNewsBlog
};

export default API;
