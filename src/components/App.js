import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (todo) => {
    //console.log('click in the parent')
    //console.log('handle change is getting this:', todo)
    //this.setState(prevState => ({ todos: prevState.todos.concat(todo) }))
    //this.setState(prevState => ({...prevState.todos, todo }))
  }

  handleAddTodo = (thing) => {
    console.log('handleAddTodo in the main parent is getting this:', thing);
    //this.setState(prevState => ({...prevState.todos, thing }));
    this.setState(prevState => ({ todos: prevState.todos.concat(thing) }))
  }

  render() {

    const todos = this.state.todos;
    console.log('and my state looks like this', todos);

    return (
      <div>
        <AddTodo 
          handleAddTodo={this.handleAddTodo}
          todos={todos} 
        />
        <TodoList todos={todos} />
      </div>
    );
  }
}
