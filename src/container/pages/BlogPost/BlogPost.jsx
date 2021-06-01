import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
import API from "../../../service";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      title: "",
      body: "",
    },
    isUpdate: false,
    comments: [],
  };

  handleRemove = async (id) => {
    await API.deleteNewsBlog(id)
    this.componentDidMount();
  };
  handleFormChange = (event) => {
    let copyformBlogPost = { ...this.state.formBlogPost };
    copyformBlogPost[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: copyformBlogPost,
    });
  };
  handleSubmit = () => {
    if (this.state.isUpdate) {
      API.putNewsBlog(
        this.state.formBlogPost,
        this.state.formBlogPost._id
      ).then((res) => {
        this.setState({
          isUpdate: false,
          formBlogPost: {
            title: "",
            body: "",
          },
        });
        this.componentDidMount();
      });
    } else {
      API.postNewsBlog(this.state.formBlogPost).then((result) => {
        this.setState({
          formBlogPost: {
            title: "",
            body: "",
          },
        });
        this.componentDidMount();
      });
    }
  };
  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };
  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  };
  componentDidMount() {
    API.getNewsBlog().then((result) => {
      this.setState({
        post: result,
      });
    });
    API.getComment().then((com) => {
      this.setState({
        comments: com,
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
        {/* <h3>Comment</h3>
        {this.state.comments.map((e) => {
          return (
            <p>
              {e.email} - {e.name}
            </p>
          );
        })} */}
      </Fragment>
    );
  }
}

export default BlogPost;
