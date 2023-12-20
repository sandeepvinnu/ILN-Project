// JavaScript.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const JavaScript = () => {

  
  const JavaScriptTopics = () => {
    const javascriptData = {
      "javascript": {
        "topics": [
          {
            "name": "Introduction to JavaScript",
            "resources": [
              {
                "title": "MDN Web Docs - JavaScript Guide",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
              },
              {
                "title": "W3Schools - JavaScript Tutorial",
                "url": "https://www.w3schools.com/js/"
              }
            ]
          },
          {
            "name": "JavaScript Basics",
            "resources": [
              {
                "title": "JavaScript.info - The Modern JavaScript Tutorial",
                "url": "https://javascript.info/"
              },
              {
                "title": "Eloquent JavaScript - Book",
                "url": "https://eloquentjavascript.net/"
              }
            ]
          },
          {
            "name": "Object-Oriented Programming in JavaScript",
            "resources": [
              {
                "title": "MDN Web Docs - Introduction to Object-Oriented JavaScript",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects"
              },
              {
                "title": "JavaScript.info - Object-Oriented Programming",
                "url": "https://javascript.info/object-oriented-programming"
              }
            ]
          },
          {
            "name": "Asynchronous JavaScript",
            "resources": [
              {
                "title": "MDN Web Docs - Asynchronous JavaScript",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous"
              },
              {
                "title": "Callback Hell - CallbackHell.com",
                "url": "http://callbackhell.com/"
              }
            ]
          },
          {
            "name": "JavaScript ES6+ Features",
            "resources": [
              {
                "title": "ES6 Features - ExploringJS",
                "url": "https://exploringjs.com/es6/"
              },
              {
                "title": "MDN Web Docs - ECMAScript 6 Features",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla"
              }
            ]
          },
          {
            "name": "Front-End Frameworks (e.g., React, Vue, Angular)",
            "resources": [
              {
                "title": "React - Official Documentation",
                "url": "https://reactjs.org/docs/getting-started.html"
              },
              {
                "title": "Vue.js - Official Documentation",
                "url": "https://vuejs.org/v2/guide/"
              }
            ]
          },
          {
            "name": "Node.js and Server-Side JavaScript",
            "resources": [
              {
                "title": "Node.js - Official Documentation",
                "url": "https://nodejs.org/en/docs/"
              },
              {
                "title": "Express.js - Official Documentation",
                "url": "https://expressjs.com/"
              }
            ]
          },
          {
            "name": "JavaScript Testing (e.g., Jest, Mocha)",
            "resources": [
              {
                "title": "Jest - Official Documentation",
                "url": "https://jestjs.io/docs/getting-started"
              },
              {
                "title": "Mocha - Official Documentation",
                "url": "https://mochajs.org/"
              }
            ]
          },
          {
            "name": "JavaScript Build Tools (e.g., Webpack, Babel)",
            "resources": [
              {
                "title": "Webpack - Official Documentation",
                "url": "https://webpack.js.org/guides/"
              },
              {
                "title": "Babel - Official Documentation",
                "url": "https://babeljs.io/docs/en/"
              }
            ]
          },
          {
            "name": "JavaScript Package Managers (e.g., npm, Yarn)",
            "resources": [
              {
                "title": "npm - Official Documentation",
                "url": "https://docs.npmjs.com/"
              },
              {
                "title": "Yarn - Official Documentation",
                "url": "https://yarnpkg.com/getting-started"
              }
            ]
          }
        ]
      }
    };


    return (
      <div className="course-topics-container">
        <h1 className="header">JavaScript Topics</h1>
        <ul className="topics-list">
          {javascriptData.javascript.topics.map((topic, index) => (
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
      {JavaScriptTopics()}
    </div>
  );
};

export default JavaScript;
