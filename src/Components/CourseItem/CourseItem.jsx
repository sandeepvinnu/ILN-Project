// CourseItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CourseItem.css';


const CourseItem = ({branchUrl, title, image, topics }) => {

  return (
    <Link to={`/Category/${branchUrl}/${title}`}>
      <div className='course-item-container'>
        <img className='course-img' src={image} alt={title} />
        <h1>{title}</h1>
      </div>
    </Link>
  );
};

export default CourseItem;
