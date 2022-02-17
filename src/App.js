import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AuthenticationScreen from './screens/AuthenticationScreen';
import HomeScreen from './screens/HomeScreen';


export default function App() {

  const [tempLoginState, settempLoginState] = useState('loggedout')

  function About() {
    return <h2 className='d-flex justify-content-center align-items-center vh-100 main-container'>About</h2>;
  }


  return (
    <div className='App'>
      <Router>
        <div>
          <ul className='m-1 p-2 text-uppercase list-unstyled nav-bar'>
            <li>
              <Link className='p-2 text-decoration-none link' to="/">Login</Link>
            </li>
            <li>
              <Link className='p-2 text-decoration-none link' to="/users">Home</Link>
            </li>
            <li>
              <Link className='p-2 text-decoration-none link' to="/about">About</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<AuthenticationScreen/>} />
            <Route path="/users" element={<HomeScreen/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
