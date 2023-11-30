import React from 'react';
import './BranchItem.css';

const BranchItem = ({ branchTitle }) => {
  return (
    <div className='branch-item'>
      <p>{branchTitle}</p>
    </div>
  );
};

export default BranchItem;
