import React, { useState, useEffect } from 'react';
import { usernameLogIn } from '../services/username.services.js';
import { setToken } from '../services/blog.services.js';

const LoginForm = ({ handleLogin, user }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem('loggedUser');
  //   if (loggedUserJSON) {
  //     const userJson = JSON.parse(loggedUserJSON);
  //     handleLogin(userJson);
  //     setToken(userJson.token);
  //   }
  // }, []);

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const userObject = {
      username,
      password,
    };

    try {
      const userDb = await usernameLogIn(userObject);
      handleLogin(userDb);
      setToken(userDb.token);
      window.localStorage.setItem('loggedUser', JSON.stringify(userDb));
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>Blog</div>
      <h2>{!user ? 'Log in to application' : ` welcome ${user.name}`}</h2>
      <form onSubmit={handleLoginForm}>
        <label htmlFor='username'>
          username
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id='username'
          />
          <label htmlFor='password'>
            password
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
            />
          </label>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
