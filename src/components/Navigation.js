import React, {Component} from 'react';
import './Navigation.scss';
import Button from './Button'

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


export default Navigation;