import React, {Component} from 'react';
import './Header.scss';

class Header extends Component{
  
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="header">
          <div className="logo-box">
            Logo
          </div>
          <div className="search-box">
            <input className="input-box" type="text" placeholder="Search something"></input>
          </div>
          <div className="settings-box">
            Settings
          </div>
        </div>
      );
    }
  
}

export default Header;