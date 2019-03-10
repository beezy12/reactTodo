import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(todo) {
    console.log('click in the parent')
    console.log(todo)
    this.setState({ todo });
  }

  render() {

    const todo = this.state.todo;

    return (
      <div>
        <AddTodo 
          handleChange={this.handleChange}
          todo={todo} 
        />
        <TodoList />
      </div>
    );
  }
}
