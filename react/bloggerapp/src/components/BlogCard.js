import React from 'react';

function BlogCard({ blog }) {
  return (
    <div className="card">
      <h3>{blog.title}</h3>
      <p><span className="label">Author:</span> {blog.author}</p>
      <p>{blog.description}</p>
    </div>
  );
}

export default BlogCard;
