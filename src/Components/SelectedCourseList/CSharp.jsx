// CSharp.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const CSharp = () => {

  
  const CSharpTopics = () => {
    const csharpData = {
      "csharp": {
        "topics": [
          {
            "name": "Introduction to C#",
            "resources": [
              {
                "title": "Microsoft Docs - C# Guide",
                "url": "https://docs.microsoft.com/en-us/dotnet/csharp/"
              },
              {
                "title": "W3Schools - C# Tutorial",
                "url": "https://www.w3schools.com/cs/"
              }
            ]
          },
          {
            "name": "C# Basics",
            "resources": [
              {
                "title": "C-sharpcorner - C# Fundamentals",
                "url": "https://www.c-sharpcorner.com/technologies/c-sharp-fundamentals"
              },
              {
                "title": "TutorialsTeacher - C# Tutorial",
                "url": "https://www.tutorialsteacher.com/csharp/csharp-tutorials"
              }
            ]
          },
          {
            "name": "Object-Oriented Programming in C#",
            "resources": [
              {
                "title": "GeeksforGeeks - Object-Oriented Programming in C#",
                "url": "https://www.geeksforgeeks.org/object-oriented-programming-in-c-sharp/"
              },
              {
                "title": "C-sharpcorner - C# Classes and Objects",
                "url": "https://www.c-sharpcorner.com/UploadFile/mahesh/c-sharp-classes-and-objects/"
              }
            ]
          },
          {
            "name": "Advanced C# Features",
            "resources": [
              {
                "title": "Pluralsight - Advanced C# Programming",
                "url": "https://www.pluralsight.com/courses/c-sharp-advanced"
              },
              {
                "title": "CodeProject - C# Advanced Concepts",
                "url": "https://www.codeproject.com/KB/cs/advancedconceptsincsharp.aspx"
              }
            ]
          },
          {
            "name": "C# Design Patterns",
            "resources": [
              {
                "title": "Dofactory - C# Design Patterns",
                "url": "https://www.dofactory.com/net/design-patterns"
              },
              {
                "title": "Guru99 - C# Design Patterns",
                "url": "https://www.guru99.com/c-sharp-design-patterns.html"
              }
            ]
          },
          {
            "name": "Asynchronous Programming in C#",
            "resources": [
              {
                "title": "Microsoft Docs - Asynchronous Programming",
                "url": "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/"
              },
              {
                "title": "C# Corner - Asynchronous Programming in C#",
                "url": "https://www.c-sharpcorner.com/article/c-sharp-corner-async-programming/"
              }
            ]
          },
          {
            "name": "C# Collections and LINQ",
            "resources": [
              {
                "title": "Tutorialsteacher - C# Collections",
                "url": "https://www.tutorialsteacher.com/csharp/csharp-collection"
              },
              {
                "title": "Microsoft Docs - LINQ",
                "url": "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/"
              }
            ]
          },
          {
            "name": "Web Development with ASP.NET Core",
            "resources": [
              {
                "title": "Microsoft Docs - ASP.NET Core",
                "url": "https://docs.microsoft.com/en-us/aspnet/core/"
              },
              {
                "title": "C# Corner - ASP.NET Core Tutorials",
                "url": "https://www.c-sharpcorner.com/technologies/aspnet-core"
              }
            ]
          }
        ]
      }
    };


    return (
      <div className="course-topics-container">
        <h1 className="header">C# Topics</h1>
        <ul className="topics-list">
          {csharpData.csharp.topics.map((topic, index) => (
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
      {CSharpTopics()}
    </div>
  );
};

export default CSharp;
