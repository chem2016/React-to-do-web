import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'


class App extends Component {
  // render is call life-cycle method, is the only that is required, it will JSX like html, easier to write JS output to the browser
  // you can not use class attribute in JSX, but use className attribute
  state = {
    todos: [
      {title: 'Crystal Polymorph', id: 1, completed: false },
      {title: 'Jaguar pKa', id: 2, completed: false},
      {title: 'paper revision', id: 3, completed: true},
    ]
  }


  render() {
    const todos = this.state.todos
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

// export this class and insert it into the root in the index.js file
export default App;
