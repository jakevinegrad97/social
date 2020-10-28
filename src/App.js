import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import AddStatus from './components/AddStatus';

class App extends Component {

state = {
  posts: [
    {
      id: 1,
      person: 'Jake',
      content: 'Like for an inbox',
      likes: 132,
      isLiked: false
    },
    {
      id: 2,
      person: 'Alex',
      content: 'I love Basford Bank',
      likes: 0,
      isLiked: false
    },
    {
      id: 3,
      person: 'Tabatha',
      content: 'Just been on the bus (;',
      likes: 5,
      isLiked: false
    }
  ]
}

handleLike = post => {
 const posts = [...this.state.posts];
 const index = posts.indexOf(post);
 if(posts[index].isLiked){
   posts[index].likes--;
 } else {
   posts[index].likes++;
 }
 posts[index].isLiked = !posts[index].isLiked;
 this.setState({posts});
}

handleSubmit = status => {
  const posts = [...this.state.posts];
  posts.push({id: 4, person: 'Jake', content: status, likes: 0, isLiked: false})
  this.setState({posts});
}

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} onLike={this.handleLike} />
        <AddStatus onSubmit={this.handleSubmit}/>
        <hr />
      </div>
    );
  }
}

export default App;
