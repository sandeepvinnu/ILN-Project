import React from 'react';
import './BranchItem.css';
import {Link} from 'react-router-dom';

const BranchItem = ({ branchTitle, url }) => {
  
  const URL = {url}

  return (
    <Link to={{ pathname: `/category/${url}/courses`, state: { data: URL } }}>
      <div className='branch-item'>
        <p>{branchTitle}</p>
      </div>
    </Link>
  );
};

export default BranchItem;
