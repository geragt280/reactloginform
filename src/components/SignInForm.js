import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignInForm({changeform}) {
  return (
    <div>
        <Form className='p-5 form-box'>
            <h3 className='m-1 mb-4'>Login Existing Account</h3>
            <Form.Group className="mb-3 m-5 mt-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3 m-5 mt-1" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3 m-5 mt-1" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className='mb-3 m5 mt-4 form-buttons'>
              <Button className='m-2 mb-0 mt-0' variant="success" type="submit">
                Login
              </Button>
              <Button className='m-2 mb-0 mt-0' variant="light" onClick={() => changeform('signup')}>
                Create New Account
              </Button>
            </Form.Group>
          </Form>
    </div>
  )
}
