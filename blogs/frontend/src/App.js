import LoginForm from './components/LoginForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import Toggable from './components/Toggable';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  const handleLogin = async (userFetched) => {
    setUser(userFetched);
  };

  const handleBlogs = async (newBlogs) => {
    setBlogs([...blogs, setBlogs]);
  };

  const fetchBlogs = async () => {
    const { data } = await axios.get('http://localhost:4000/api/blogs');
    setBlogs(data);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {user ? (
        <BlogForm handleBlogs={handleBlogs} />
      ) : (
        <LoginForm handleLogin={handleLogin} user={user} />
      )}
      <Toggable label='blogs'>
        <Blog user={user} blogs={blogs} />
      </Toggable>
    </div>
  );
}

export default App;
