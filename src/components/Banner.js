import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676__340.png'
            alt='First slide'
          />
          <Carousel.Caption>
            <div className='d-flex justify-content-center'>
              <Link to='/alltodo'>
                <button className='btn btn-dark'>See All Todo</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676__340.png'
            alt='Second slide'
          />

          <Carousel.Caption>
            <div className='d-flex justify-content-center'>
              <Link to='/alltodo'>
                <button className='btn btn-dark'>See All Todo</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676__340.png'
            alt='Third slide'
          />

          <Carousel.Caption>
            <div className='d-flex justify-content-center'>
              <Link to='/alltodo'>
                <button className='btn btn-dark'>See All Todo</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
