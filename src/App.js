import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

export default function App() {

  const [changeform, setchangeform] = useState('login')

  return (
    <div className='App'>
      <Container className='d-flex justify-content-center align-items-center vh-100 main-container'>
        <div>
          {changeform === 'login'?<SignInForm changeform={setchangeform} /> : <SignUpForm changeform={setchangeform} />}
        </div>
      </Container>
    </div>
  )
}
