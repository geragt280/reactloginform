import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HomeScreen() {

  const navigate = useNavigate();
  const login = useSelector(state => state.auth);
  const name = useSelector(state => state.user.username)
  let location = useLocation();
  // console.log('Inside Homescreen login status', props);

  // const name = location.state.name;

  useEffect(() => {
    if(login === 'loggedout') 
      navigate(-1);
  },[])
  

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 main-container'><h1>User : {name}</h1></div>
  )
}
