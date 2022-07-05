import React, { useState } from 'react';
import { usernameLogIn } from '../services/username.services.js';

const Blog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    try {
      const getUser = usernameLogIn(user);
      setUser(getUser);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user);

  return (
    <>
      <div>Blog</div>
      <h2>{!user ? 'Log in to application' : ` welcome ${user.name}`}</h2>
      <form onSubmit={handleLogin}>
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

export default Blog;
