import React from 'react';

const Todo = (props) => (
  <div>
    <p>{props.todo}</p>
    <button onClick={(event) => {
      props.handleDeleteTodo(props.todo)
    }}>
      Remove
    </button>
  </div>
)

export default Todo;