import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="card">
      <h3>{course.courseName}</h3>
      <p><span className="label">Trainer:</span> {course.trainer}</p>
      <p><span className="label">Duration:</span> {course.duration}</p>
    </div>
  );
}

export default CourseCard;
