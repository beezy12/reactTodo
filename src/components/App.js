import React, { Component } from 'react';
import AddTodo from './AddTodo'

export default class TodoApp extends Component {
  state = {
    todos: []
  }

  handleAddTodo = (todo) => {

    this.setState(() => {})
  }

  render() {
    return (
      <div>
        <AddTodo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
