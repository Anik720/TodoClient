import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Store } from 'react-notifications-component';
const TodoDetails = ({ x, reRender }) => {
  const [strikeThrough, setStikethrough] = useState(false);
  const handleNotification = () => {
    setStikethrough(true);
    Store.addNotification({
      title: 'Wonderful!',
      message: '',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://placementtodo.herokuapp.com/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => reRender());
  };
  return (
    <div className=''>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{x.name}</Card.Title>

          <Card.Text>
            {' '}
            {strikeThrough ? (
              <p
                style={{
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                  color: 'red',
                }}>
                {x.description}
              </p>
            ) : (
              <p>{x.description}</p>
            )}
          </Card.Text>
        </Card.Body>
      </Card>

      <div>
        <button className='btn btn-dark' onClick={handleNotification}>
          Complete
        </button>
        <button
          className='btn btn-dark ms-3'
          onClick={() => handleDelete(x._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoDetails;
