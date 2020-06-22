import React from 'react';
import Button from './Button';

const TodoItem = ({value,remove,done}) => {
  return (
    <li>
      <span>{value}</span>
      <Button value="Delete" onClick={remove} />
      <Button value="Done" onClick = {done} />
    </li>
  )
}

export default TodoItem;