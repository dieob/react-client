import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import PostList from './PostList';
import Create from './Create';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component{

  render() {
    return (
      <div className="app-container">
        <Router>
          <Header></Header>
          <nav className="navigation">
            <Link to='/create' className="create-button"> <h3>Create a posting</h3></Link>
            <Link to='/' className="navigation-item"> <h3>Home</h3></Link>
          </nav>
          {/*<Route exact path='/' render={(props) => <PostList {...props} postList={this.state.posts} />} />*/}
          <Route exact path='/' component={PostList} />
          <Route path='/create' component={Create} />
        </Router>
      </div>
    );
  }
}

export default App;