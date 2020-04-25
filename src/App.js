import React from 'react';
import './App.scss';

class App extends React.Component{
  
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
        <PostList></PostList>
      </div>
    );
  }
}

class Header extends React.Component{
  
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

class Logo extends React.Component{
  
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

class Search extends React.Component{
  
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

class Settings extends React.Component{
  
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

class Navigation extends React.Component{
  
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

class PostList extends React.Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-list">
        <h3>posts</h3>
      </div>
    );
  }

}

class Button extends React.Component{
  
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



export default App;
