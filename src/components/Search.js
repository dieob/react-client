import React, {Component} from 'react';
import './Search.scss';

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

export default Search;