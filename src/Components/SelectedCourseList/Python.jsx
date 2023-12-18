// Example Python.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const Python = () => {

  
const PythonTopics = () => {
  const pythonData = {
    "python": {
      "topics": [
        {
          "name": "Introduction to Python",
          "resources": [
            {
              "title": "Python.org",
              "url": "https://www.python.org/"
            },
            {
              "title": "W3Schools Python Tutorial",
              "url": "https://www.w3schools.com/python/"
            }
          ]
        },
        {
          "name": "Data Types",
          "resources": [
            {
              "title": "Real Python - Python Data Types: A Practical Guide",
              "url": "https://realpython.com/python-data-types/"
            },
            {
              "title": "Python Documentation - Built-in Types",
              "url": "https://docs.python.org/3/library/stdtypes.html"
            }
          ]
        },
        {
          "name": "Control Flow",
          "resources": [
            {
              "title": "GeeksforGeeks - Python | Decision Making (if, if-elif, else)",
              "url": "https://www.geeksforgeeks.org/python-decision-making-elif-else-nested-elif/"
            },
            {
              "title": "Python Control Flow - if statements",
              "url": "https://www.python-course.eu/python3_conditional_statements.php"
            }
          ]
        },
        {
          "name": "Functions",
          "resources": [
            {
              "title": "Real Python - Defining Your Own Python Function",
              "url": "https://realpython.com/defining-your-own-python-function/"
            },
            {
              "title": "Python.org - Defining Functions",
              "url": "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
            }
          ]
        },
        {
          "name": "Object-Oriented Programming (OOP)",
          "resources": [
            {
              "title": "Real Python - Object-Oriented Programming (OOP) in Python 3",
              "url": "https://realpython.com/python3-object-oriented-programming/"
            },
            {
              "title": "Python.org - Classes",
              "url": "https://docs.python.org/3/tutorial/classes.html"
            }
          ]
        }
      ]
    }
  };


  return (
    <div className="course-topics-container">
      <h1 className="header">Python Topics</h1>
      <ul className="topics-list">
        {pythonData.python.topics.map((topic, index) => (
          <li key={index} className="topic-item">
            <h2 className="topic-name">{topic.name}</h2>
            <ul className="resources-list">
              {topic.resources.map((resource, resourceIndex) => (
                <li key={resourceIndex} className="resource-item">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};


  return (
    <div className='content-bg-container'>
      <h1 className='heading'>Python COURSE</h1>
      {PythonTopics()}
    </div>
  );
};

export default Python;
