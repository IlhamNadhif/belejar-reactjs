import React, { Component } from 'react'
import axios from 'axios';

class DetailPost extends Component {
    state = {
        post: {
            title: "",
            body: ""
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.postID;
        const blog = await axios.get(`http://localhost:4000/${id}`)
        this.setState({
            post: blog.data
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.post.title}</h3>
                <h5>{this.state.post.body}</h5>
            </div>
        )
    }
}

export default DetailPost
