import React from 'react';

const Todo = (props) => (
  <div>
    <div className='todo'>
      <p className='todo__text'>{props.count}. {props.todo}</p>
      <div className='buttons__todo'>
        <button className='button button--link' onClick={props.markTodoDone}>mark as done</button>
        <button
          className='button button--link'
          onClick={(event) => {
            props.handleDeleteTodo(props.todo)
          }}>
          remove
        </button>
      </div>
    </div>
  </div>
);

export default Todo;