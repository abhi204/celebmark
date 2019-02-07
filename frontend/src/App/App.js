import React, { Component } from 'react';
import HomePage from '../HomePage/index';

class App extends Component {
  render() {
    console.log(this.props.children)
    return (
			<div>
        { this.props.children || <HomePage /> }
			</div>
    );
  }
}

// Any Page/Component is to be rendered inside App
export default App;
