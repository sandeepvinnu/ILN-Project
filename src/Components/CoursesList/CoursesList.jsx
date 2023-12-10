// CoursesList.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './CoursesList.css';
import SelectedCourses from '../SelectedCourses/SelectedCourses';

const CoursesList = () => {
  const { url } = useParams();
  const branchURL = url;

  return (
    <div className='courses-list-container'>
      <h1 className='main-heading'>Courses</h1>
      <SelectedCourses branchUrl={branchURL} />
    </div>
  );
};

export default CoursesList;
