import React, {Component} from 'react';
import './App.scss';

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

class Header extends Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <Logo></Logo>
        <Search></Search>
        <Settings></Settings>
      </div>
    );
  }

}

class Logo extends Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logo-box">
        Logo
      </div>
    );
  }

}

class Search extends Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-box">
        <input className="input-box" type="text" placeholder="Search something"></input>
      </div>
    );
  }
}

class Settings extends Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="settings-box">
        Settings
      </div>
    );
  }
}

class Navigation extends Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation">
        <Button></Button>
        <h3>TEST</h3>
        <h3>TEST</h3>
        <h3>TEST</h3>
        <h3>TEST</h3>
      </div>
    );
  }

}

class Button extends Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="button-container">
        <div className="button-primary">
          Post yours
        </div>
      </div>
    );
  }

}

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
          <h3>{this.props.title}</h3>
          </div>
        </div>
    );
  }

}



export default App;
