import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo = (thing) => {
    //this.setState(prevState => ({...prevState.todos, thing }));
    this.setState(prevState => ({ todos: prevState.todos.concat(thing) }))
  }

  handleDeleteTodo = (todoToDelete) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((currentOne) => currentOne !== todoToDelete)
    }))
  }

  handleDeleteAll = () => {
    this.setState(() => ({ todos: []}));
  }

  render() {
    const title = 'Organize Your Life'
    const todos = this.state.todos;
    console.log('my state looks like this', todos);

    return (
      <div>
        {title}
        <AddTodo 
          handleAddTodo={this.handleAddTodo}
        />
        <TodoList 
          todos={todos}
          handleDeleteTodo={this.handleDeleteTodo}
          handleDeleteAll={this.handleDeleteAll}
        />
      </div>
    );
  }
}
