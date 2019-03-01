import React, { Component } from 'react';

class Todos extends Component {
  // render is call life-cycle method, is the only that is required, it will JSX like html, easier to write JS output to the browser
  // you can not use class attribute in JSX, but use className attribute
  render() {
    //   console.log(this.props.todos)
    // the todos is passed in through this.props from App.js
    // App.js import the Todo component, call it in JSX
    // then assign this.state.todos to todos property in <Todos />
    // function call, this property is being passed down to here 
    // through this.props
    return (
      <div>
        <h1>Todos</h1>
        
      </div>
    );
  }
}

// export this class and insert it into the root in the index.js file
export default Todos;
