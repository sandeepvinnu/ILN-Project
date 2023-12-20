// CSS.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const CSS = () => {

  
  const CSSTopics = () => {
    const cssData = {
      "css": {
        "topics": [
          {
            "name": "Introduction to CSS",
            "resources": [
              {
                "title": "Mozilla Developer Network (MDN) - CSS Basics",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/CSS"
              },
              {
                "title": "W3Schools - CSS Tutorial",
                "url": "https://www.w3schools.com/css/"
              }
            ]
          },
          {
            "name": "CSS Selectors and Styling",
            "resources": [
              {
                "title": "CSS Tricks - Guide to CSS Selectors",
                "url": "https://css-tricks.com/how-css-selectors-work/"
              },
              {
                "title": "Smashing Magazine - Advanced CSS Selectors",
                "url": "https://www.smashingmagazine.com/2009/08/taming-advanced-css-selectors/"
              }
            ]
          },
          {
            "name": "CSS Layouts",
            "resources": [
              {
                "title": "CSS Grid Layout - MDN Web Docs",
                "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
              },
              {
                "title": "Flexbox - A Complete Guide",
                "url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
              }
            ]
          },
          {
            "name": "Responsive Web Design with CSS",
            "resources": [
              {
                "title": "Responsive Web Design - A List Apart",
                "url": "https://alistapart.com/article/responsive-web-design/"
              },
              {
                "title": "CSS Media Queries - MDN Web Docs",
                "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries"
              }
            ]
          },
          {
            "name": "CSS Animation and Transitions",
            "resources": [
              {
                "title": "CSS Animation for Beginners - CSS Tricks",
                "url": "https://css-tricks.com/css-animation-for-beginners/"
              },
              {
                "title": "CSS Transitions - MDN Web Docs",
                "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions"
              }
            ]
          },
          {
            "name": "CSS Preprocessors (e.g., Sass, Less)",
            "resources": [
              {
                "title": "Sass - Official Documentation",
                "url": "https://sass-lang.com/documentation"
              },
              {
                "title": "Less - Official Documentation",
                "url": "http://lesscss.org/"
              }
            ]
          },
          {
            "name": "CSS Frameworks (e.g., Bootstrap)",
            "resources": [
              {
                "title": "Bootstrap - Official Documentation",
                "url": "https://getbootstrap.com/docs/5.1/"
              },
              {
                "title": "Tailwind CSS - Documentation",
                "url": "https://tailwindcss.com/docs"
              }
            ]
          },
          {
            "name": "CSS Architecture and Best Practices",
            "resources": [
              {
                "title": "CSS Guidelines",
                "url": "https://cssguidelin.es/"
              },
              {
                "title": "MaintainableCSS - Writing Modular CSS",
                "url": "http://maintainablecss.com/"
              }
            ]
          },
          {
            "name": "CSS in Modern Web Development",
            "resources": [
              {
                "title": "CSS-in-JS - The Good, The Bad, & The Ugly",
                "url": "https://www.javascriptstuff.com/css-in-js/"
              },
              {
                "title": "Styled Components - Documentation",
                "url": "https://styled-components.com/docs"
              }
            ]
          },
          {
            "name": "CSS Variables",
            "resources": [
              {
                "title": "CSS Variables - MDN Web Docs",
                "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
              },
              {
                "title": "CSS Tricks - A strategy guide to CSS custom properties",
                "url": "https://css-tricks.com/strategies-keeping-css-variables-maneuverable-maintainable/"
              }
            ]
          }
        ]
      }
    };


    return (
      <div className="course-topics-container">
        <h1 className="header">CSS Topics</h1>
        <ul className="topics-list">
          {cssData.css.topics.map((topic, index) => (
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
      {CSSTopics()}
    </div>
  );
};

export default CSS;
