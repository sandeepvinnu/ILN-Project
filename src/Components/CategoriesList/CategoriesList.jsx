import React from "react";
import './CategoriesList.css';
import CategoryItem from '../CategoryItem/CategoryItem'; // Import the Category Item component
import Categories from '../Data/Categories.json'; // Import the Categories

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
