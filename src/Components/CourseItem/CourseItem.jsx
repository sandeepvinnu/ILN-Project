// CourseItem.jsx
import React from 'react';
import './CourseItem.css';


const CourseItem = ({ title, image, branchUrl, topics }) => {

  return (
    <div className='course-item-container'>
      <img className='course-img' src={image} alt={title} />
      <h1>{title}</h1>
    </div>
  );
};

export default CourseItem;
