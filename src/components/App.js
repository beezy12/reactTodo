import React, { Component } from 'react';

import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';
import '../styles/styles.scss';

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
    this.setState(prevState => ({ todos: prevState.todos.concat(thing) }));
  }

  handleDeleteTodo = (todoToDelete) => {
    console.log(todoToDelete)
    this.setState((prevState) => ({
      todos: prevState.todos.filter((currentOne) => currentOne !== todoToDelete)
    }));
  }

  handleDeleteAll = () => {
    this.setState(() => ({ todos: [] }));
  }

  markTodoDone = () => {
    console.log('marked as done')
  }


  render() {
    const todos = this.state.todos;
    console.log('my state looks like this', todos);
    const subtitle = 'one little thing at a time...';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
          <div className='widget'>
            <TodoList
              todos={todos}
              handleDeleteTodo={this.handleDeleteTodo}
              handleDeleteAll={this.handleDeleteAll}
              markTodoDone={this.markTodoDone}
            />
            <AddTodo
              handleAddTodo={this.handleAddTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}
