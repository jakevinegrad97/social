import React, { Component } from 'react';

class Post extends Component {

  render() {
    const {post, onLike} = this.props;
    return (
      <div style={{border: '2px solid', margin: '10px', width: '30%'}}>
        <h3 className='m-2'>{post.person}</h3>
        <h4 className='m-2'>{post.content}</h4>
        <span className='badge m-2 badge-primary'>
          {post.likes} likes
        </span>
        <button style={{float: 'right', marginRight: '10px'}} className={this.likeStyle()} onClick={() => onLike(post)}>
          {this.isLiked()}
        </button>
      </div>
    );
  }

  likeStyle(){
    let style = 'btn btn-sm btn-outline-';
    style += this.props.post.isLiked ? 'danger' : 'primary';
    return style;
  }

  isLiked() {
    return this.props.post.isLiked ? 'Unlike' : 'Like'
  }

}

export default Post;
