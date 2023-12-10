import React from "react";
import './CategoriesList.css';
import CategoryItem from '../CategoryItem/CategoryItem'; 
import Categories from '../Data/Categories.json'; 

const CategoriesList = () => {
  return (
    <div className="categories-list-container">
      {Categories.categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategoriesList;
