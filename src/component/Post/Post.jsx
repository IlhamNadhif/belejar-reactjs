import React from "react";

const Post = (props) => {
  return (
    <div className="container">
      <img src="https://placeimg.com/200/150/tech" alt="" />
      <div className="content">
        <h2 onClick={() => props.goDetail(props.data._id)}>{props.data.title}</h2>
        <p>{props.data.body}</p>
      </div>
      <div className="btn">
        <button onClick={() => props.update(props.data)}>Edit</button>
        <button onClick={() => props.remove(props.data._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Post;
