import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Tasks</h3>
      {props.todos.length > 1 && 
      <button
        className='button button--link'
        onClick={props.handleDeleteAll}
      >
        remove all tasks
      </button>}
    </div>
    {props.todos.length === 0 && <p className='widget__message'>Add something to do!</p>}
    {props.todos.map((todo, index) => (
      <Todo
        key={index} 
        todo={todo}
        handleDeleteTodo={props.handleDeleteTodo}
        count={index + 1}
      />
    ))}
  </div>
);

export default TodoList;