// NodeJS.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const NodeJS = () => {

  
  const NodeJSTopics = () => {
    const nodejsData = {
      "nodejs": {
        "topics": [
          {
            "name": "Introduction to Node.js",
            "resources": [
              {
                "title": "Node.js - Official Documentation",
                "url": "https://nodejs.org/en/docs/"
              },
              {
                "title": "W3Schools - Node.js Tutorial",
                "url": "https://www.w3schools.com/nodejs/"
              }
            ]
          },
          {
            "name": "Node.js Basics",
            "resources": [
              {
                "title": "MDN Web Docs - Getting Started with Node.js",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework"
              },
              {
                "title": "The Net Ninja - Node.js Crash Course",
                "url": "https://netninja.dev/p/node-js-crash-course"
              }
            ]
          },
          {
            "name": "Express.js - Web Application Framework for Node.js",
            "resources": [
              {
                "title": "Express.js - Official Documentation",
                "url": "https://expressjs.com/"
              },
              {
                "title": "MDN Web Docs - Express.js: Web framework for Node.js",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
              }
            ]
          },
          {
            "name": "Asynchronous JavaScript in Node.js",
            "resources": [
              {
                "title": "Node.js Asynchronous Programming - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/node-js-async-programming/"
              },
              {
                "title": "The Net Ninja - Asynchronous JavaScript in Node.js",
                "url": "https://netninja.dev/p/asynchronous-javascript-in-nodejs"
              }
            ]
          },
          {
            "name": "Node.js and Database (e.g., MongoDB, MySQL)",
            "resources": [
              {
                "title": "Node.js and MongoDB - Official Documentation",
                "url": "https://docs.mongodb.com/drivers/node/"
              },
              {
                "title": "Node.js and MySQL - npm Package",
                "url": "https://www.npmjs.com/package/mysql"
              }
            ]
          },
          {
            "name": "RESTful API Development with Node.js",
            "resources": [
              {
                "title": "Building a RESTful API with Node.js - The Net Ninja",
                "url": "https://netninja.dev/p/rest-api"
              },
              {
                "title": "RESTful API Design - Best Practices in a Nutshell",
                "url": "https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api"
              }
            ]
          },
          {
            "name": "Real-time Web Applications with Socket.io",
            "resources": [
              {
                "title": "Socket.io - Official Documentation",
                "url": "https://socket.io/docs/v4"
              },
              {
                "title": "Building Real-time Applications with Socket.io - The Net Ninja",
                "url": "https://netninja.dev/p/real-time-web-apps-with-socketio"
              }
            ]
          },
          {
            "name": "Authentication and Authorization in Node.js",
            "resources": [
              {
                "title": "Passport.js - Authentication Middleware for Node.js",
                "url": "http://www.passportjs.org/"
              },
              {
                "title": "JSON Web Tokens (JWT) - Introduction",
                "url": "https://jwt.io/introduction/"
              }
            ]
          },
          {
            "name": "Node.js Testing (e.g., Mocha, Chai)",
            "resources": [
              {
                "title": "Mocha - Official Documentation",
                "url": "https://mochajs.org/"
              },
              {
                "title": "Chai - Assertion Library for Node.js",
                "url": "https://www.chaijs.com/"
              }
            ]
          },
          {
            "name": "Node.js Deployment and Hosting",
            "resources": [
              {
                "title": "Node.js Deployment - DigitalOcean Tutorial",
                "url": "https://www.digitalocean.com/community/tutorial_series/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04"
              },
              {
                "title": "Heroku - Node.js Deployment Guide",
                "url": "https://devcenter.heroku.com/categories/nodejs-support"
              }
            ]
          }
        ]
      }
    };


    return (
      <div className="course-topics-container">
        <h1 className="header">NodeJS Topics</h1>
        <ul className="topics-list">
          {nodejsData.nodejs.topics.map((topic, index) => (
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
      {NodeJSTopics()}
    </div>
  );
};

export default NodeJS;
