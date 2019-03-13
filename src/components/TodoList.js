import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => (
  <div>
    {props.todos.length === 0 && <p>Add something to do!</p>}
    {props.todos.map((todo, index) => (
      <Todo
        key={index} 
        todo={todo}
        handleDeleteTodo={props.handleDeleteTodo}
      />
    ))}
  </div>
)

export default TodoList;