import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props) 
    
    this.state = {
      value: ''
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleAddTodo(event) {
    //console.log(event)
    event.preventDefault();

    console.log(`I received this ${this.state.value}`)
  }

  render() {
    const todo = this.state.value;

    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <label>
            Add a todo here:
            <input type="text" name="todo" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {todo}
      </div>
    );
  }
}