import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props.children)
    return (
			<div>
        APP
			</div>
    );
  }
}

// Any Page/Component is to be rendered inside App
export default App;
