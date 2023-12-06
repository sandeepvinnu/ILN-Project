// CoursesList.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './CoursesList.css';

const CoursesList = () => {
  const { url } = useParams();

  return (
    <div className='courses-list-container'>
      <h1>Page 2</h1>
      <p>Data from Branches page: {url}</p>
    </div>
  );
};

export default CoursesList;
