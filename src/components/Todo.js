import React from 'react';

const Todo = (props) => (
  <div>
    <p>{props.todo}
      <button onClick={(event) => {
        props.handleDeleteTodo(props.todo)
      }}>
        Remove
      </button>
    </p>
  </div>
)

export default Todo;