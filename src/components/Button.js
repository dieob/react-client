import React, {Component} from 'react';
import './Button.scss';

class Button extends Component{
  
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="button-container">
          <a href="#" className="button-primary">POST</a>
        </div>
      );
    }
  
}

export default Button;