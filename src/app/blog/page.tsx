import React from "react";

const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>My Blog</h1>;
};

export default Blog;
