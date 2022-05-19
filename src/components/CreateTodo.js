import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const CreateTodo = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    console.log(description);
    const data = { name, description };
    fetch('https://placementtodo.herokuapp.com/todo', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    navigate('/alltodo');
  };

  return (
    <div className='w-50 m-auto'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Task Name</Form.Label>
          <Form.Control type='text' name='name' placeholder='Enter Task Name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Tsk Description</Form.Label>
          <Form.Control
            type='text'
            name='description'
            placeholder='Description'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <div className='d-flex justify-content-center'>
        <Link to='/alltodo'>
          <button className='btn btn-dark'>See All Todo</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateTodo;
