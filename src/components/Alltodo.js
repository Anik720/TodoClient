import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import TodoDetails from './TodoDetails';

const Alltodo = () => {
  const [todo, setTodo] = useState([]);
  console.log(todo);
  useEffect(() => {
    fetch('https://placementtodo.herokuapp.com/todo')
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todo]);
  const reRender = () => {
    setTodo(todo);
  };
  return (
    <div>
      <div className='container row row-cols-lg-3 row-cols-md-1'>
        {todo.map((x) => (
          <TodoDetails x={x} reRender={reRender}></TodoDetails>
        ))}
      </div>
    </div>
  );
};

export default Alltodo;
