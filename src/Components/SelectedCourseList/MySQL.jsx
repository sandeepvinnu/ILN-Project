// MySQL.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const MySQL = () => {

  
  const MySQLTopics = () => {
    const mysqlData = {
      "mysql": {
        "topics": [
          {
            "name": "Introduction to MySQL",
            "resources": [
              {
                "title": "MySQL Documentation",
                "url": "https://dev.mysql.com/doc/"
              },
              {
                "title": "W3Schools - MySQL Tutorial",
                "url": "https://www.w3schools.com/sql/"
              }
            ]
          },
          {
            "name": "MySQL Basics",
            "resources": [
              {
                "title": "MySQL Tutorial - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/mysql/index.htm"
              },
              {
                "title": "MySQL Basics - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/mysql-basics/"
              }
            ]
          },
          {
            "name": "MySQL Query Language (SQL)",
            "resources": [
              {
                "title": "MySQL SQL Statement Syntax",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html"
              },
              {
                "title": "MySQL Query Tutorial - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/mysql/mysql-query-syntax.htm"
              }
            ]
          },
          {
            "name": "MySQL Database Design",
            "resources": [
              {
                "title": "Database Design - MySQL Documentation",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/database-design.html"
              },
              {
                "title": "MySQL Database Design Tutorial - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/mysql/mysql-create-database.htm"
              }
            ]
          },
          {
            "name": "MySQL Indexing and Optimization",
            "resources": [
              {
                "title": "MySQL Indexes - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/indexing-in-databases-set-1/"
              },
              {
                "title": "MySQL Performance Optimization - Percona Blog",
                "url": "https://www.percona.com/blog/2020/08/28/mysql-performance-optimization/"
              }
            ]
          },
          {
            "name": "MySQL Stored Procedures and Functions",
            "resources": [
              {
                "title": "MySQL Stored Procedures - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/mysql/mysql-stored-procedures.htm"
              },
              {
                "title": "MySQL Functions - MySQL Documentation",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/functions.html"
              }
            ]
          },
          {
            "name": "MySQL Replication",
            "resources": [
              {
                "title": "MySQL Replication Tutorial - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/mysql/mysql-replication.htm"
              },
              {
                "title": "MySQL Replication - MySQL Documentation",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/replication.html"
              }
            ]
          },
          {
            "name": "MySQL Security",
            "resources": [
              {
                "title": "MySQL Security Best Practices - Oracle Documentation",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/security-best-practices.html"
              },
              {
                "title": "MySQL Security Guide - MySQL Documentation",
                "url": "https://dev.mysql.com/doc/mysql-security-excerpt/8.0/en/"
              }
            ]
          },
          {
            "name": "MySQL High Availability",
            "resources": [
              {
                "title": "MySQL High Availability - Percona Blog",
                "url": "https://www.percona.com/blog/2020/04/20/mysql-high-availability/"
              },
              {
                "title": "MySQL Group Replication - MySQL Documentation",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/group-replication.html"
              }
            ]
          },
          {
            "name": "MySQL Backup and Restore",
            "resources": [
              {
                "title": "MySQL Backup - MySQL Documentation",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html"
              },
              {
                "title": "MySQL Backup and Restore Tutorial - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/mysql/mysql-backup-and-restore.htm"
              }
            ]
          }
        ]
      }
    };


    return (
      <div className="course-topics-container">
        <h1 className="header">MySQL Topics</h1>
        <ul className="topics-list">
          {mysqlData.mysql.topics.map((topic, index) => (
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
      {MySQLTopics()}
    </div>
  );
};

export default MySQL;
