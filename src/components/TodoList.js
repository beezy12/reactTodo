import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => (
  <div>
    {props.todos.map((todo, index) => (
      <Todo
        key={index} 
        todos={todo}
      />
    ))}
  </div>
)

export default TodoList;