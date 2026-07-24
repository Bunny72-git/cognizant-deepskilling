import React from 'react';
import BlogCard from './BlogCard';

function BlogDetails() {
  const blogs = [
    { id: 1, title: 'UI Trends 2026', author: 'Ava Bennett', description: 'A look at the latest trends in user interface design.' },
    { id: 2, title: 'React Performance', author: 'Jackson Lee', description: 'How to optimize React apps for speed and responsiveness.' },
    { id: 3, title: 'CSS Grid Guide', author: 'Ella Scott', description: 'Using CSS Grid to create modern, flexible layouts.' },
    { id: 4, title: 'Testing React', author: 'Mason Reed', description: 'Best practices for writing maintainable component tests.' },
    { id: 5, title: 'Accessibility First', author: 'Sophia Adams', description: 'Why accessibility matters and how to build inclusive interfaces.' }
  ];

  return (
    <section>
      <h2 className="details-title">Blog Details</h2>
      <div className="card-list">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default BlogDetails;
