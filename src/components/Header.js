import React, {Component} from 'react';
import './Header.scss';
import Logo from './Logo';
import Search from './Search';
import Settings from './Settings';

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

export default Header;