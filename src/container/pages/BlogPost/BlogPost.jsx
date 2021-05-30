import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  handleRemove = async (data) => {
    await axios.delete(`http://localhost:4000/${data}`);
    this.componentDidMount();
  };
  handleFormChange = (event) => {
    // console.log("event", event);
    let copyformBlogPost = { ...this.state.formBlogPost };
    copyformBlogPost[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: copyformBlogPost,
    });
  };
  handleSubmit = async () => {
    if (this.state.isUpdate) {
      await axios.put(
        `http://localhost:4000/${this.state.formBlogPost._id}`,
        this.state.formBlogPost
      );
      this.setState({
        isUpdate: false,
        formBlogPost: {
          title: "",
          body: "",
        },
      });
    } else {
      await axios.post("http://localhost:4000/", this.state.formBlogPost);
      this.setState({
        formBlogPost: {
          title: "",
          body: "",
        },
      });
    }
    this.componentDidMount();
  };
  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };
  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`)
  };
  componentDidMount() {
    /* fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
          this.setState({
              post: json
          })
      }); */
    axios.get("http://localhost:4000/").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }
  render() {
    return (
      <Fragment>
        <p> Halaman BlogPost</p>
        <hr />
        <h1>Blog Post</h1>
        <div className="form">
          <label htmlFor="title">Title</label>
          <input
            value={this.state.formBlogPost.title}
            type="text"
            name="title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Body</label>
          <textarea
            value={this.state.formBlogPost.body}
            name="body"
            id=""
            cols="30"
            rows="10"
            onChange={this.handleFormChange}
          ></textarea>
          <button onClick={this.handleSubmit}>
            {this.state.isUpdate ? "Simpan" : "Tambah"}
          </button>
        </div>
        <hr />

        {this.state.post.map((po) => {
          return (
            <Post
              key={po._id}
              data={po}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goDetail={this.handleDetail}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
