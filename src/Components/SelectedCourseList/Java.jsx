// Java.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const Java = () => {

  
  const JavaTopics = () => {
    const javaData = {
      "java": {
        "topics": [
          {
            "name": "Introduction to Java",
            "resources": [
              {
                "title": "Oracle Java Tutorials",
                "url": "https://docs.oracle.com/javase/tutorial/"
              },
              {
                "title": "GeeksforGeeks - Java Programming Language",
                "url": "https://www.geeksforgeeks.org/java/"
              }
            ]
          },
          {
            "name": "Java Basics",
            "resources": [
              {
                "title": "W3Schools - Java Tutorial",
                "url": "https://www.w3schools.com/java/"
              },
              {
                "title": "Baeldung - Java Basics",
                "url": "https://www.baeldung.com/getting-started-java"
              }
            ]
          },
          {
            "name": "Object-Oriented Programming in Java",
            "resources": [
              {
                "title": "Java TPoint - OOP Concepts in Java",
                "url": "https://www.javatpoint.com/java-oops-concepts"
              },
              {
                "title": "JavaWorld - Introduction to Java's encapsulation",
                "url": "https://www.javaworld.com/article/2075275/core-java/encapsulation-is-not-information-hiding.html"
              }
            ]
          },
          {
            "name": "Java Collections",
            "resources": [
              {
                "title": "Oracle Java Documentation - Collections Framework",
                "url": "https://docs.oracle.com/javase/tutorial/collections/index.html"
              },
              {
                "title": "JournalDev - Java Collections Framework Tutorial",
                "url": "https://www.journaldev.com/1260/java-collections-tutorial"
              }
            ]
          },
          {
            "name": "Exception Handling in Java",
            "resources": [
              {
                "title": "Baeldung - Exception Handling in Java",
                "url": "https://www.baeldung.com/java-exceptions"
              },
              {
                "title": "Java Tutorials - Exception Handling",
                "url": "https://beginnersbook.com/2013/04/exception-handling-examples/"
              }
            ]
          },
          {
            "name": "Multithreading in Java",
            "resources": [
              {
                "title": "GeeksforGeeks - Multithreading in Java",
                "url": "https://www.geeksforgeeks.org/multithreading-in-java/"
              },
              {
                "title": "Baeldung - Guide to Java Thread Safety",
                "url": "https://www.baeldung.com/java-thread-safety"
              }
            ]
          },
          {
            "name": "JavaFX",
            "resources": [
              {
                "title": "Oracle JavaFX Documentation",
                "url": "https://openjfx.io/"
              },
              {
                "title": "JavaFX Tutorial by CodeGym",
                "url": "https://codegym.cc/courses/javafx"
              }
            ]
          },
          {
            "name": "Spring Framework",
            "resources": [
              {
                "title": "Spring Framework - Official Documentation",
                "url": "https://docs.spring.io/spring-framework/docs/current/reference/html/web.html"
              },
              {
                "title": "Baeldung - Spring Tutorial for Beginners",
                "url": "https://www.baeldung.com/spring-tutorial"
              }
            ]
          },
          {
            "name": "Hibernate",
            "resources": [
              {
                "title": "Hibernate - Official Documentation",
                "url": "https://docs.jboss.org/hibernate/orm/5.5/userguide/html_single/Hibernate_User_Guide.html"
              },
              {
                "title": "Java Brains - Hibernate Tutorial",
                "url": "https://javabrains.io/courses/hibernate-introduction"
              }
            ]
          },
          {
            "name": "RESTful Web Services with JAX-RS",
            "resources": [
              {
                "title": "Java Code Geeks - JAX-RS Tutorial",
                "url": "https://examples.javacodegeeks.com/enterprise-java/rest/jax-rs-resteasy-tutorial/"
              },
              {
                "title": "Baeldung - JAX-RS Tutorial",
                "url": "https://www.baeldung.com/jax-rs-tutorial"
              }
            ]
          },
          {
            "name": "Java 8 Features",
            "resources": [
              {
                "title": "Oracle - Java 8 Features",
                "url": "https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"
              },
              {
                "title": "Baeldung - Guide to Java 8",
                "url": "https://www.baeldung.com/java-8"
              }
            ]
          },
          {
            "name": "Java 9 Modules (Project Jigsaw)",
            "resources": [
              {
                "title": "Oracle - Project Jigsaw Quick-Start Guide",
                "url": "https://openjdk.java.net/projects/jigsaw/quick-start"
              },
              {
                "title": "InfoQ - Java 9 Modules Introduction",
                "url": "https://www.infoq.com/articles/Java-9-Modular-Introduction/"
              }
            ]
          },
          {
            "name": "Java Design Patterns",
            "resources": [
              {
                "title": "DZone - Core Java Design Patterns",
                "url": "https://dzone.com/articles/the-7-day-java-design-patterns-tutorial-day-1"
              },
              {
                "title": "Gang of Four (GoF) Design Patterns",
                "url": "https://sourcemaking.com/design_patterns"
              }
            ]
          },
          {
            "name": "JUnit and Testing in Java",
            "resources": [
              {
                "title": "JUnit - Official Documentation",
                "url": "https://junit.org/junit5/docs/current/user-guide/"
              },
              {
                "title": "Baeldung - JUnit 5 Tutorial",
                "url": "https://www.baeldung.com/junit-5"
              }
            ]
          },
          {
            "name": "Java Concurrency",
            "resources": [
              {
                "title": "Java Tutorials - Concurrency in Java",
                "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/"
              },
              {
                "title": "Baeldung - Java Concurrency and Parallelism",
                "url": "https://www.baeldung.com/java-concurrency-multithreading"
              }
            ]
          },
          {
            "name": "Java I/O",
            "resources": [
              {
                "title": "Oracle - The Java™ Tutorials - Essential Classes - Basic I/O",
                "url": "https://docs.oracle.com/javase/tutorial/essential/io/index.html"
              },
              {
                "title": "Baeldung - Java I/O Tutorial",
                "url": "https://www.baeldung.com/java-io-tutorial"
              }
            ]
          },
          {
            "name": "Java Serialization",
            "resources": [
              {
                "title": "GeeksforGeeks - Serialization in Java",
                "url": "https://www.geeksforgeeks.org/serialization-in-java/"
              },
              {
                "title": "Baeldung - Java Serialization Guide",
                "url": "https://www.baeldung.com/java-serialization"
              }
            ]
          },
          {
            "name": "Java Networking",
            "resources": [
              {
                "title": "Oracle - The Java™ Tutorials - Custom Networking",
                "url": "https://docs.oracle.com/javase/tutorial/networking/index.html"
              },
              {
                "title": "Baeldung - Java Networking Tutorial",
                "url": "https://www.baeldung.com/java-networking"
              }
            ]
          },
          {
            "name": "Java Database Connectivity (JDBC)",
            "resources": [
              {
                "title": "Oracle - The Java™ Tutorials - JDBC Basics",
                "url": "https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html"
              },
              {
                "title": "Baeldung - JDBC Tutorial",
                "url": "https://www.baeldung.com/jdbc"
              }
            ]
          },
          {
            "name": "JavaFX Scene Builder",
            "resources": [
              {
                "title": "Oracle - Getting Started with JavaFX Scene Builder",
                "url": "https://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/jfxsb-get_started.htm"
              },
              {
                "title": "Tutorialspoint - JavaFX Scene Builder Tutorial",
                "url": "https://www.tutorialspoint.com/javafx/javafx_scene_builder.htm"
              }
            ]
          },
          {
            "name": "Java Security",
            "resources": [
              {
                "title": "Oracle - Java Platform, Standard Edition Security Developer’s Guide",
                "url": "https://docs.oracle.com/javase/8/docs/technotes/guides/security/index.html"
              },
              {
                "title": "Baeldung - Java Security API Guide",
                "url": "https://www.baeldung.com/java-security"
              }
            ]
          },
          {
            "name": "Java Reflection",
            "resources": [
              {
                "title": "GeeksforGeeks - Reflection in Java",
                "url": "https://www.geeksforgeeks.org/reflection-in-java/"
              },
              {
                "title": "Baeldung - Guide to Java Reflection",
                "url": "https://www.baeldung.com/java-reflection"
              }
            ]
          },
          {
            "name": "Java Annotations",
            "resources": [
              {
                "title": "Oracle - Annotations in Java",
                "url": "https://docs.oracle.com/javase/tutorial/java/annotations/index.html"
              },
              {
                "title": "Baeldung - Java Annotations Tutorial",
                "url": "https://www.baeldung.com/java-annotations"
              }
            ]
          },
          {
            "name": "Java 11 Features",
            "resources": [
              {
                "title": "Java 11 Documentation",
                "url": "https://docs.oracle.com/en/java/javase/11/"
              },
              {
                "title": "Baeldung - Guide to Java 11",
                "url": "https://www.baeldung.com/java-11"
              }
            ]
          },
          {
            "name": "Java Design Patterns",
            "resources": [
              {
                "title": "TutorialsPoint - Design Patterns in Java",
                "url": "https://www.tutorialspoint.com/design_pattern/index.htm"
              },
              {
                "title": "DZone - The Basics of Java Design Patterns",
                "url": "https://dzone.com/articles/design-patterns-the-basics"
              }
            ]
          },
          {
            "name": "Java Generics",
            "resources": [
              {
                "title": "Oracle - The Java™ Tutorials - Generics",
                "url": "https://docs.oracle.com/javase/tutorial/java/generics/index.html"
              },
              {
                "title": "Baeldung - A Guide to Java Generics",
                "url": "https://www.baeldung.com/java-generics"
              }
            ]
          },
          {
            "name": "Java 10 Features",
            "resources": [
              {
                "title": "Java 10 Documentation",
                "url": "https://docs.oracle.com/javase/10/"
              },
              {
                "title": "Baeldung - Guide to Java 10",
                "url": "https://www.baeldung.com/java-10"
              }
            ]
          },
          {
            "name": "Java Lambda Expressions",
            "resources": [
              {
                "title": "Oracle - The Java™ Tutorials - Lambda Expressions",
                "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"
              },
              {
                "title": "Baeldung - Introduction to Java Lambda Expressions",
                "url": "https://www.baeldung.com/java-lambda-intro"
              }
            ]
          },
          {
            "name": "Java XML Processing",
            "resources": [
              {
                "title": "Java API for XML Processing (JAXP) - Oracle Documentation",
                "url": "https://docs.oracle.com/javase/8/docs/technotes/guides/xml/index.html"
              },
              {
                "title": "Baeldung - Guide to Java XML Processing",
                "url": "https://www.baeldung.com/java-xml"
              }
            ]
          },
          {
            "name": "Java Memory Management",
            "resources": [
              {
                "title": "Oracle - Garbage Collection in the Java HotSpot Virtual Machine",
                "url": "https://docs.oracle.com/en/java/javase/11/gctuning/index.html"
              },
              {
                "title": "Baeldung - Understanding Java Garbage Collection",
                "url": "https://www.baeldung.com/java-garbage-collectors"
              }
            ]
          },
          // Add more topics and resources...
        ]
      }
    }
    

    return (
      <div className="course-topics-container">
        <h1 className="header">Java Topics</h1>
        <ul className="topics-list">
          {javaData.java.topics.map((topic, index) => (
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
      <h1 className='heading'>Java COURSE</h1>
      {JavaTopics()}
    </div>
  );
};

export default Java;
