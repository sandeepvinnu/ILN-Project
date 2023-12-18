import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UnderConstruction from '../Components/UnderConstruction/UnderConstruction';
import './PagesCss/SelectedCourse.css';

const SelectedCourse = () => {
  const { title } = useParams();
  const [selectedCourseComponent, setSelectedCourseComponent] = useState(null);

  useEffect(() => {
    const importComponent = async () => {
      try {
        const module = await import(`../Components/SelectedCourseList/${title}`);
        const Component = module.default;
        
        if (Component) {
          setSelectedCourseComponent(<Component />);
        } else {
          console.error(`Component not found for title: ${title}`);
          setSelectedCourseComponent(<UnderConstruction />);
        }
      } catch (error) {
        console.error('Error loading component:', error);
        setSelectedCourseComponent(<UnderConstruction />);
      }
    };

    importComponent();
  }, [title]);

  return <div className='selected-course-container'>{selectedCourseComponent}</div>;
};

export default SelectedCourse;
