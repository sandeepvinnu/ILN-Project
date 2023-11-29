import React from 'react'
import './PagesCss/Category.css'

const categorySections = [
  { id: 1, title: 'ENGINEERING', tagLine: '"My buildings will be my legacy"'},
  { id: 2, title: 'PRIMARY EDUCATION', tagLine: 'Education shapes tomorrow' },
  { id: 3, title: 'SECONDARY EDUCATION', tagLine: 'Learning leads to growth' },
  { id: 4, title: 'HISTORY', tagLine: 'Learn Today, Lead Tomorrow' }
  // Add more benefits here
];

const categorieSectionTopics = [
  { id: 1, title: 'Computer Science Engineering'},
  { id: 2, title: 'Electrical Engineering'},
  { id: 3, title: 'Electronics & Communication Engineering'},
  { id: 4, title: 'Mechanical Engineering'},
  { id: 5, title: 'Civil Engineering'},
  { id: 6, title: 'Chemical Engineering'},
  { id: 7, title: 'Aeronautical Engineering'},
  { id: 8, title: 'Automobile Engineering'}
  // Add more benefits here
];

const Category = () => {
  return (
    <div className='category-bg-container'>
      <div className='category-sections-grid'>
        {categorySections.map((categorySection) => (
          <div key={categorySection.id} className="category-sections">
            <h2 className="category-sections-title">{categorySection.title}</h2>
            <p className="category-sections-tag-line">{categorySection.tagLine}</p>
            <div className='category-section-topics-grid'>
              {categorieSectionTopics.map((categorySectionTopic) => (
                <div key={categorySectionTopic.id} className="category-section-topics">
                  <h2 className="category-section-topics-title">{categorySectionTopic.title}</h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category