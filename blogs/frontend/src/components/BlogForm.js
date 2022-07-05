import React, { useState } from 'react';
import { createBlog } from '../services/blog.services.js';

const BlogForm = ({ handleBlogs }) => {
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleBlogForm = (e) => {
    e.preventDefault();

    const newBlog = {
      author,
      url,
      title,
    };
    createBlog(newBlog);
    handleBlogs(newBlog);
  };

  return (
    <div>
      <form onSubmit={handleBlogForm}>
        <h2>Create Blog</h2>
        author
        <input type='text' onChange={(e) => setAuthor(e.target.value)} />
        url
        <input type='text' onChange={(e) => setUrl(e.target.value)} />
        title
        <input type='text' onChange={(e) => setTitle(e.target.value)} />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default BlogForm;
