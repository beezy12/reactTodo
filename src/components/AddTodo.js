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
        <form className='add-option' onSubmit={this.handleAddTodo}>
          <input className='add-option__input' type="text" name='option' ref={this.input} />
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}