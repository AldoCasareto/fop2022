import Form from './components/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './components/Blog';

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const { data } = await axios.get('http://localhost:4000/api/blogs');
    console.log(`data = `, data);
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Form />
      <Blog blogs={blogs} />
    </div>
  );
}

export default App;
