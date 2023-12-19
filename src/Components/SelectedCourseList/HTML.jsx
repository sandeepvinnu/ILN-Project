// HTML.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const HTML = () => {
  const HTMLTopics = () => {
    const htmlData = {
      "html": {
        "topics": [
          {
            "name": "HTML Basics",
            "resources": [
              {
                "title": "Mozilla Developer Network (MDN) - HTML Basics",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
              },
              {
                "title": "W3Schools - HTML Tutorial",
                "url": "https://www.w3schools.com/html/"
              }
            ]
          },
          {
            "name": "HTML Forms",
            "resources": [
              {
                "title": "MDN - HTML Forms",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/Forms"
              },
              {
                "title": "W3Schools - HTML Forms",
                "url": "https://www.w3schools.com/html/html_forms.asp"
              }
            ]
          },
          {
            "name": "Semantic HTML",
            "resources": [
              {
                "title": "CSS-Tricks - HTML5 Semantics",
                "url": "https://css-tricks.com/essential-meta-tags-social-media/"
              },
              {
                "title": "MDN - HTML elements reference",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
              }
            ]
          },
          {
            "name": "HTML5 Canvas",
            "resources": [
              {
                "title": "MDN - HTML5 Canvas",
                "url": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
              },
              {
                "title": "W3Schools - HTML5 Canvas",
                "url": "https://www.w3schools.com/html/html5_canvas.asp"
              }
            ]
          },
          {
            "name": "Responsive Web Design",
            "resources": [
              {
                "title": "MDN - Responsive Web Design Basics",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
              },
              {
                "title": "Smashing Magazine - A Complete Guide to Flexbox",
                "url": "https://www.smashingmagazine.com/2018/08/beginners-guide-css-flexbox/"
              }
            ]
          },
          {
            "name": "HTML Media",
            "resources": [
              {
                "title": "MDN - Embedding media into HTML",
                "url": "https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_content"
              },
              {
                "title": "W3Schools - HTML Audio/Video",
                "url": "https://www.w3schools.com/html/html5_audio.asp"
              }
            ]
          }
        ]
      }
    };
    
  
  
    return (
      <div className="course-topics-container">
        <h1 className="header">HTML Topics</h1>
        <ul className="topics-list">
          {htmlData.html.topics.map((topic, index) => (
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
      {HTMLTopics()}
    </div>
  );
};

export default HTML;
