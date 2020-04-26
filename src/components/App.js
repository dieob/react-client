import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import PostList from './PostList';
import Create from './Create';
import Button from './Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <Router>
          <Header></Header>
          <nav className="navigation">
            <Link to='/create' className="create-button"> <h3>Create a posting</h3></Link>
            <Link to='/' className="navigation-item"> <h3>Home</h3></Link>
          </nav>
          <Route exact path='/' render={(props) => <PostList {...props} postList={this.state.posts} />} />
          <Route path='/create' component={Create} />
        </Router>
      </div>
    );
  }
}

export default App;
