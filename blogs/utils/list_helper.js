export const dummy = (blogs) => {
  return 1;
};

export const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

export const favoriteBlog = (blogs) => {
  return blogs.reduce((prev, current) => {
    return prev.likes > current.likes ? prev : current;
  }, 0);
};

export const mostBlogs = (blogs) => {
  if (!!blogs) return;

  const authors = blogs.map(({ author }) => author);

  const authorsInBlogs = blogs;
};
