import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import Navigation from './Navigation';
import PostList from './PostList'

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {posts:[]}
  }

  componentDidMount(){
    //fetch posts from api
    fetch('http://heroku-java-webapp.herokuapp.com/posts')
      .then(response => response.json())
      .then(data => this.setState({posts: data }));
  }

  render() {
    return (
      <div className="app-container">
        <Header></Header>
        <Navigation></Navigation>
        <PostList postList={this.state.posts}></PostList>
      </div>
    );
  }
}

export default App;
