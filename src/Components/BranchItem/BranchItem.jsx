// BranchItem.jsx
import React from 'react';
import './BranchItem.css';
import { Link } from 'react-router-dom';

const BranchItem = ({ branchTitle, url }) => {

  return (
    <Link to={`/Category/${url}`}>
      <div className='branch-item'>
        <p>{branchTitle}</p>
      </div>
    </Link>
  );
};

export default BranchItem;
