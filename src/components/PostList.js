import React, {Component} from 'react';
import './PostList.scss';
import Post from './Post'

class PostList extends Component{
  
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="post-list">
          { this.props.postList.map(post => (
              <Post title={post.title} description={post.description} city={post.city}></Post>
          ))}
        </div>
      )
    }
}

export default PostList;