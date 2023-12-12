import React from 'react';
import { useParams } from 'react-router-dom';
import './PagesCss/SelectedCourse.css';


const SelectedCourse = () => {
    
  const { branchUrl, title } = useParams();
//   const BranchUrl = branchUrl;
//   const Title = title;

  return (
    <div className='selected-course-container'>
      <h1>Title: {title} <br/><hr/><br/> branch URL:{branchUrl}</h1>
    </div>
  )
}

export default SelectedCourse
