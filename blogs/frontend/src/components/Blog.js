import React from 'react';

const Blog = ({ blogs }) => {
  return (
    <>
      <ul>
        {blogs.map((blog) => (
          <li>
            {blog.title} {blog.author}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
