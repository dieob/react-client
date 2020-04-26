import React, {Component} from 'react';
import './Post.scss';

class Post extends Component{
  
    constructor(props) {
      super(props);
    }
  
    render() {
  
      return(
          <div className="post-item">
            <div className="post-photo">
              <h4>{this.props.city}</h4>
            </div>
            <div className="post-text">
            <p>{this.props.title}</p>
            </div>
          </div>
      );
    }
}

export default Post;