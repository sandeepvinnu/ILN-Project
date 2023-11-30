import React from 'react';
import './CategoryItem.css';
import BranchItem from '../BranchItem/BranchItem'

const CategoryItem = ({ title, tagLine, branches }) => {
  return (
    <div className='category-item'>
      <h2 className='title'>{title}</h2>
      <p className='tag-line'>{tagLine}</p>
      <div className="category-branches-container">
        {branches.map((branch) => (
            <BranchItem key={branch.id} {...branch} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
