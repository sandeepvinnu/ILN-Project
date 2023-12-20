// Python.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const CP = () => {

  
  const CPTopics = () => {
    const cpData = {
      "cp": {
        "topics": [
          {
            "name": "Introduction to C",
            "resources": [
              {
                "title": "GeeksforGeeks - C Programming Language",
                "url": "https://www.geeksforgeeks.org/c-programming-language/"
              },
              {
                "title": "Tutorialspoint - Learn C Programming",
                "url": "https://www.tutorialspoint.com/cprogramming/index.htm"
              }
            ]
          },
          {
            "name": "C Basics",
            "resources": [
              {
                "title": "Learn-C.org - C Tutorial",
                "url": "https://www.learn-c.org/"
              },
              {
                "title": "Cprogramming.com - C Tutorial",
                "url": "https://www.cprogramming.com/"
              }
            ]
          },
          {
            "name": "Pointers and Memory Management in C",
            "resources": [
              {
                "title": "GeeksforGeeks - Pointers in C",
                "url": "https://www.geeksforgeeks.org/pointers-in-c/"
              },
              {
                "title": "C Pointer - Pointers and Memory in C",
                "url": "https://www.cpointer.com/"
              }
            ]
          },
          {
            "name": "File Handling in C",
            "resources": [
              {
                "title": "Programiz - File Handling in C",
                "url": "https://www.programiz.com/c-programming/c-file-input-output"
              },
              {
                "title": "Cprogramming.com - File Handling in C",
                "url": "https://www.cprogramming.com/tutorial/cfileio.html"
              }
            ]
          },
          {
            "name": "Data Structures in C",
            "resources": [
              {
                "title": "GeeksforGeeks - Data Structures in C",
                "url": "https://www.geeksforgeeks.org/data-structures/"
              },
              {
                "title": "C4Learn - Data Structures in C",
                "url": "https://www.c4learn.com/c-programming/c-data-structure/"
              }
            ]
          },
          {
            "name": "Dynamic Memory Allocation in C",
            "resources": [
              {
                "title": "Fresh2Refresh - Dynamic Memory Allocation in C",
                "url": "https://fresh2refresh.com/c-programming/c-dynamic-memory-allocation/"
              },
              {
                "title": "Cprogramming.com - Dynamic Memory Allocation",
                "url": "https://www.cprogramming.com/tutorial/c/lesson12.html"
              }
            ]
          },
          {
            "name": "C Standard Template Library (STL)",
            "resources": [
              {
                "title": "GeeksforGeeks - C++ STL",
                "url": "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/"
              },
              {
                "title": "cplusplus.com - C++ Standard Library",
                "url": "http://www.cplusplus.com/reference/stl/"
              }
            ]
          },
          {
            "name": "Multithreading in C",
            "resources": [
              {
                "title": "GeeksforGeeks - Multithreading in C",
                "url": "https://www.geeksforgeeks.org/multithreading-c-2/"
              },
              {
                "title": "Cprogramming.com - Multithreading in C",
                "url": "https://www.cprogramming.com/tutorial/c/lesson26.html"
              }
            ]
          },
          {
            "name": "C Graphics Programming",
            "resources": [
              {
                "title": "GeeksforGeeks - Graphics in C",
                "url": "https://www.geeksforgeeks.org/graphics-programming-in-c-set-1/"
              },
              {
                "title": "Cprogramming.com - Graphics in C",
                "url": "https://www.cprogramming.com/tutorial/c/lesson1.html"
              }
            ]
          },
          {
            "name": "C Networking",
            "resources": [
              {
                "title": "GeeksforGeeks - Computer Networks",
                "url": "https://www.geeksforgeeks.org/computer-network-tutorials/"
              },
              {
                "title": "Cprogramming.com - Networking in C",
                "url": "https://www.cprogramming.com/tutorial/c/lesson18.html"
              }
            ]
          }
        ]
      }
    };


    return (
      <div className="course-topics-container">
        <h1 className="header">CP Topics</h1>
        <ul className="topics-list">
          {cpData.cp.topics.map((topic, index) => (
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
      {CPTopics()}
    </div>
  );
};

export default CP;
