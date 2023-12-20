// Python.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const PHP = () => {

  
  const PHPTopics = () => {
    const phpData = {
      "php": {
        "topics": [
          {
            "name": "Introduction to PHP",
            "resources": [
              {
                "title": "PHP.net - Getting Started",
                "url": "https://www.php.net/manual/en/getting-started.php"
              },
              {
                "title": "W3Schools - PHP Tutorial",
                "url": "https://www.w3schools.com/php/"
              }
            ]
          },
          {
            "name": "PHP Basics",
            "resources": [
              {
                "title": "PHP.net - PHP Manual",
                "url": "https://www.php.net/manual/en/"
              },
              {
                "title": "PHP Basics - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/php/index.htm"
              }
            ]
          },
          {
            "name": "Object-Oriented Programming in PHP",
            "resources": [
              {
                "title": "PHP.net - Object-Oriented Programming",
                "url": "https://www.php.net/manual/en/language.oop5.php"
              },
              {
                "title": "GeeksforGeeks - PHP Object-Oriented Programming",
                "url": "https://www.geeksforgeeks.org/php-object-oriented-programming/"
              }
            ]
          },
          {
            "name": "PHP Web Development (e.g., Laravel, Symfony)",
            "resources": [
              {
                "title": "Laravel - Official Documentation",
                "url": "https://laravel.com/docs/8.x"
              },
              {
                "title": "Symfony - Official Documentation",
                "url": "https://symfony.com/doc/current/index.html"
              }
            ]
          },
          {
            "name": "MySQL Database Integration with PHP",
            "resources": [
              {
                "title": "PHP.net - MySQLi Extension",
                "url": "https://www.php.net/manual/en/book.mysqli.php"
              },
              {
                "title": "PHP and MySQL - W3Schools",
                "url": "https://www.w3schools.com/php/php_mysql_intro.asp"
              }
            ]
          },
          {
            "name": "PHP Security Best Practices",
            "resources": [
              {
                "title": "PHP Security - OWASP",
                "url": "https://cheatsheetseries.owasp.org/cheatsheets/PHP_Security_Cheat_Sheet.html"
              },
              {
                "title": "PHP Security Guide - PHP.net",
                "url": "https://www.php.net/manual/en/security.php"
              }
            ]
          },
          // Add more topics and resources here...
          {
            "name": "RESTful API Development with PHP",
            "resources": [
              {
                "title": "Slim Framework - Official Documentation",
                "url": "https://www.slimframework.com/docs/v4/"
              },
              {
                "title": "Building RESTful APIs with PHP - SitePoint",
                "url": "https://www.sitepoint.com/build-restful-api-using-php-slim-mysql/"
              }
            ]
          },
          {
            "name": "PHP Testing (e.g., PHPUnit)",
            "resources": [
              {
                "title": "PHPUnit - Official Documentation",
                "url": "https://phpunit.de/getting-started/phpunit-10.html"
              },
              {
                "title": "Testing PHP Applications - Symfony",
                "url": "https://symfony.com/doc/current/testing.html"
              }
            ]
          },
          {
            "name": "PHP Composer - Dependency Manager for PHP",
            "resources": [
              {
                "title": "Composer - Official Documentation",
                "url": "https://getcomposer.org/doc/"
              },
              {
                "title": "Packagist - PHP Package Repository",
                "url": "https://packagist.org/"
              }
            ]
          },
          {
            "name": "PHP CMS (e.g., WordPress)",
            "resources": [
              {
                "title": "WordPress - Official Documentation",
                "url": "https://developer.wordpress.org/"
              },
              {
                "title": "Building a WordPress Theme from Scratch - Tuts+",
                "url": "https://code.tutsplus.com/series/building-a-wordpress-theme-from-scratch--wp-33888"
              }
            ]
          }
        ]
      }
    };


    return (
      <div className="course-topics-container">
        <h1 className="header">PHP Topics</h1>
        <ul className="topics-list">
          {phpData.php.topics.map((topic, index) => (
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
      {PHPTopics()}
    </div>
  );
};

export default PHP;
