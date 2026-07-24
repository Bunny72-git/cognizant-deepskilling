import React from 'react';
import CourseCard from './CourseCard';

function CourseDetails() {
  const courses = [
    { id: 1, courseName: 'React Fundamentals', trainer: 'Olivia Parker', duration: '6 weeks' },
    { id: 2, courseName: 'Advanced JavaScript', trainer: 'Liam Wilson', duration: '5 weeks' },
    { id: 3, courseName: 'UI/UX Design', trainer: 'Emma Johnson', duration: '4 weeks' },
    { id: 4, courseName: 'Web Testing', trainer: 'Noah Thompson', duration: '3 weeks' },
    { id: 5, courseName: 'Frontend Architecture', trainer: 'Avery Martin', duration: '7 weeks' }
  ];

  return (
    <section>
      <h2 className="details-title">Course Details</h2>
      <div className="card-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default CourseDetails;
