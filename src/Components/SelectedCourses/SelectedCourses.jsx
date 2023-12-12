// SelectedCourses.jsx
import React from 'react';
import CourseItem from '../CourseItem/CourseItem';
import data from '../Data/Courses.json';
import './SelectedCourses.css';

const SelectedCourses = (props) => {
  
  const {branchUrl} = props;

  function filterCoursesByBranch(branchUrl, coursesArray) {
    return coursesArray.filter(course => course.branchUrl === branchUrl);
  }
  

  const filteredCourses = filterCoursesByBranch(branchUrl, data.courses);
  

  return (
    <div className='selected-courses-container'>
      {filteredCourses.length > 0 ? (
        <div className='courses-container'>
            {filteredCourses.map(course => (
              <CourseItem key={course.id} {...course} branchUrl={branchUrl} />
            ))}
        </div>
      ) : (
        // If no courses are found, render a message
        <p>No courses found for the specified branch.</p>
      )}

    </div>
  );
};

export default SelectedCourses;
