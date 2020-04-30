import React from 'react';
import './PostList.scss';
import Post from './Post'

import { connect } from 'react-redux';
import { fetchPostData } from '../actions';

function PostList({ posts }) {
  console.log("POST COMPONENT");
  console.log(posts)
  console.log("POSTS LENGTH");
  console.log(posts.length);

  if(posts.length === 0) {
    return (
      <div>
        No Data
      </div>
    )
  }
  return (
    <div className="post-list">
    { posts.map(post => (
        <Post key={post.id} title={post.title} description={post.description} city={post.city}></Post>
    ))}
  </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPostData())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);