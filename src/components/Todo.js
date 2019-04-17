import React from 'react';

const Todo = (props) => (
  <div className='todo'>
    <p className='todo__text'>{props.count}. {props.todo}</p>
    <button 
      className='button button--link'
      onClick={(event) => {
        props.handleDeleteTodo(props.todo)
      }}>
      remove
    </button>
  </div>
);

export default Todo;