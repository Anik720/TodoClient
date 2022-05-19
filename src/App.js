import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import CreateTodo from './components/CreateTodo';
import Navbarr from './components/Navbarr';
import Alltodo from './components/Alltodo';
import { ReactNotifications } from 'react-notifications-component';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from '../src/components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className=''>
      <ReactNotifications />
      <Navbarr></Navbarr>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route
          path='/addtodo'
          element={
            <RequireAuth>
              <CreateTodo></CreateTodo>
            </RequireAuth>
          }></Route>
        <Route
          path='/alltodo'
          element={
            <RequireAuth>
              <Alltodo></Alltodo>
            </RequireAuth>
          }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
