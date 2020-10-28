import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

  render() {
    const {posts, onLike} = this.props;
    return (
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} onLike={onLike}/>
        ))}
      </div>
    );
  }

}

export default Posts;
