import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebaseinit';
import { signOut } from 'firebase/auth';
const Navbarr = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            {' '}
            Home
          </Navbar.Brand>
          <Navbar.Brand as={Link} to='/addtodo'>
            {' '}
            Add Task
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              {user ? (
                <button type='button' onClick={logout} className='btn btn-dark'>
                  signout
                </button>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  <button type='button' className='btn btn-dark'>
                    Login
                  </button>
                </Nav.Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
