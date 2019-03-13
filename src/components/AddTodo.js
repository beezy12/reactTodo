import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props) 
    
    this.state = {
      value: ''
    }

    this.input = React.createRef();
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(event) {
    event.preventDefault();

    this.props.handleAddTodo(this.input.current.value.trim());
    this.input.current.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <label>
            Add a todo here:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}