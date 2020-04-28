import React, {Component} from 'react';
import './PostList.scss';
import Post from './Post'

import { connect } from 'react-redux';

function PostList({ posts }) {
  console.log("POST COMPONENT");
  console.log(posts)
  if(!posts) {
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
  console.log("POST MAPSTATE");
  console.log(state);
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  null
)(PostList);