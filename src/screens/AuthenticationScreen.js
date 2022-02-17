import React, { useState } from 'react'
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Container from 'react-bootstrap/Container';

export default function AuthenticationScreen() {

  const [changeform, setchangeform] = useState('login');

  return (
    <div>
        <Container className='d-flex justify-content-center align-items-center vh-100 main-container'>
            <div>
                {changeform === 'login'?<SignInForm changeform={setchangeform} /> : <SignUpForm changeform={setchangeform} />}
            </div>
        </Container>
    </div>
  )
}
