import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeSection, setActiveSection] = useState('books');

  const renderSection = () => {
    if (activeSection === 'books') {
      return <BookDetails />;
    } else if (activeSection === 'blogs') {
      return <BlogDetails />;
    }
    return <CourseDetails />;
  };

  const buttonClass = section => {
    return activeSection === section ? 'tab-button active' : 'tab-button';
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Blogger App</h1>
        <p>Explore books, blogs, and courses using conditional rendering and reusable components.</p>
      </header>
      <div className="button-group">
        <button className={buttonClass('books')} onClick={() => setActiveSection('books')}>
          Show Books
        </button>
        <button className={buttonClass('blogs')} onClick={() => setActiveSection('blogs')}>
          Show Blogs
        </button>
        <button className={buttonClass('courses')} onClick={() => setActiveSection('courses')}>
          Show Courses
        </button>
      </div>
      <main className="content-area">{renderSection()}</main>
    </div>
  );
}

export default App;
