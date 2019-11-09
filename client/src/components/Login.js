import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWtihAuth';

const Login = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', userInfo)
      .then(result => {
        localStorage.setItem('token', result.data.payload)
        props.history.push('/bubble-page')
      })
      .catch(error => console.log(error))
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input name='username' value={userInfo.username} placeholder='Username' onChange={handleChange} />
        <input name='password' value={userInfo.password} placeholder='Password' onChange={handleChange} />
        <button type='submit'>Sign In</button>
      </form>
    </>
  );
};

export default Login;
