// Cpp.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const Cpp = () => {

  
  const CppTopics = () => {
    const cppData = {
      "cpp": {
        "topics": [
          {
            "name": "Introduction to C++",
            "resources": [
              {
                "title": "cplusplus.com - C++ Tutorial",
                "url": "http://www.cplusplus.com/doc/tutorial/"
              },
              {
                "title": "GeeksforGeeks - C++ Programming Language",
                "url": "https://www.geeksforgeeks.org/c-plus-plus/"
              }
            ]
          },
          {
            "name": "C++ Basics",
            "resources": [
              {
                "title": "LearnCpp.com - C++ Tutorial",
                "url": "https://www.learncpp.com/"
              },
              {
                "title": "Tutorialspoint - C++ Programming Tutorial",
                "url": "https://www.tutorialspoint.com/cplusplus/index.htm"
              }
            ]
          },
          {
            "name": "Object-Oriented Programming in C++",
            "resources": [
              {
                "title": "GeeksforGeeks - Object Oriented Programming in C++",
                "url": "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/"
              },
              {
                "title": "Cplusplus.com - C++ Classes and Objects",
                "url": "http://www.cplusplus.com/doc/tutorial/classes/"
              }
            ]
          },
          {
            "name": "C++ Standard Template Library (STL)",
            "resources": [
              {
                "title": "GeeksforGeeks - C++ STL Tutorial",
                "url": "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/"
              },
              {
                "title": "cplusplus.com - Standard Template Library (STL)",
                "url": "http://www.cplusplus.com/reference/stl/"
              }
            ]
          },
          {
            "name": "C++ Templates",
            "resources": [
              {
                "title": "GeeksforGeeks - Templates in C++",
                "url": "https://www.geeksforgeeks.org/templates-cpp/"
              },
              {
                "title": "cplusplus.com - C++ Templates",
                "url": "http://www.cplusplus.com/doc/oldtutorial/templates/"
              }
            ]
          },
          {
            "name": "File Handling in C++",
            "resources": [
              {
                "title": "GeeksforGeeks - File Handling in C++",
                "url": "https://www.geeksforgeeks.org/file-handling-c-classes/"
              },
              {
                "title": "cplusplus.com - File I/O in C++",
                "url": "http://www.cplusplus.com/doc/tutorial/files/"
              }
            ]
          },
          {
            "name": "Multithreading in C++",
            "resources": [
              {
                "title": "GeeksforGeeks - Multithreading in C++",
                "url": "https://www.geeksforgeeks.org/multithreading-in-cpp/"
              },
              {
                "title": "cplusplus.com - Multithreading in C++",
                "url": "http://www.cplusplus.com/doc/tutorial/threads/"
              }
            ]
          },
          {
            "name": "Graphics Programming in C++",
            "resources": [
              {
                "title": "SFML - Simple and Fast Multimedia Library",
                "url": "https://www.sfml-dev.org/"
              },
              {
                "title": "OpenGL - Graphics Rendering API",
                "url": "https://www.opengl.org/"
              }
            ]
          },
          {
            "name": "Game Development in C++",
            "resources": [
              {
                "title": "Unreal Engine - C++ Programming Guide",
                "url": "https://docs.unrealengine.com/en-US/ProgrammingAndScripting/index.html"
              },
              {
                "title": "Unity - C++ Integration",
                "url": "https://docs.unity.com/Manual/ManagedCodeInterop.html"
              }
            ]
          },
          {
            "name": "Boost C++ Libraries",
            "resources": [
              {
                "title": "Boost C++ Libraries - Official Documentation",
                "url": "https://www.boost.org/doc/"
              },
              {
                "title": "Boost C++ Libraries - Getting Started",
                "url": "https://www.boost.org/doc/libs/1_77_0/more/getting_started/index.html"
              }
            ]
          },
          {
            "name": "C++17 and Beyond",
            "resources": [
              {
                "title": "cppreference.com - C++17 Features",
                "url": "https://en.cppreference.com/w/cpp/17"
              },
              {
                "title": "ISO C++ - C++ Standards Committee Papers",
                "url": "https://isocpp.org/std/status"
              }
            ]
          },
          {
            "name": "Concurrency in C++",
            "resources": [
              {
                "title": "Concurrency in Action by Anthony Williams",
                "url": "https://www.oreilly.com/library/view/c-concurrency-in/9781617294693/"
              },
              {
                "title": "The C++ Programming Language by Bjarne Stroustrup",
                "url": "https://www.stroustrup.com/programming.html"
              }
            ]
          },
          {
            "name": "C++ Best Practices",
            "resources": [
              {
                "title": "C++ Core Guidelines",
                "url": "https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md"
              },
              {
                "title": "Effective C++ by Scott Meyers",
                "url": "https://www.aristeia.com/EC3E/"
              }
            ]
          },
          {
            "name": "C++ GUI Programming",
            "resources": [
              {
                "title": "Qt - C++ GUI Framework",
                "url": "https://www.qt.io/"
              },
              {
                "title": "GTK - The GIMP Toolkit",
                "url": "https://www.gtk.org/"
              }
            ]
          },
          {
            "name": "Modern C++ Design",
            "resources": [
              {
                "title": "Modern C++ Design by Andrei Alexandrescu",
                "url": "https://www.oreilly.com/library/view/modern-c-design/0201704315/"
              },
              {
                "title": "Effective Modern C++ by Scott Meyers",
                "url": "https://www.oreilly.com/library/view/effective-modern-c/9781491908419/"
              }
            ]
          },
          {
            "name": "C++ Unit Testing",
            "resources": [
              {
                "title": "Catch - C++ Automated Test Cases in Headers",
                "url": "https://github.com/catchorg/Catch2"
              },
              {
                "title": "Google Test - C++ Testing Framework",
                "url": "https://github.com/google/googletest"
              }
            ]
          },
          {
            "name": "C++ Web Development",
            "resources": [
              {
                "title": "CppCMS - High Performance C++ Web Framework",
                "url": "https://cppcms.com/"
              },
              {
                "title": "Wt - C++ Web Toolkit",
                "url": "https://www.webtoolkit.eu/wt"
              }
            ]
          },
          {
            "name": "C++ Machine Learning",
            "resources": [
              {
                "title": "MLpack - Scalable C++ Machine Learning Library",
                "url": "https://www.mlpack.org/"
              },
              {
                "title": "Dlib - Toolkit for Machine Learning and Computer Vision",
                "url": "http://dlib.net/"
              }
            ]
          },
          {
            "name": "C++ Networking",
            "resources": [
              {
                "title": "Boost.Asio - Networking Library",
                "url": "https://www.boost.org/doc/libs/1_77_0/doc/html/boost_asio.html"
              },
              {
                "title": "Poco C++ Libraries - Net Module",
                "url": "https://pocoproject.org/docs/Poco.Net.html"
              }
            ]
          },
          {
            "name": "C++ Robotics",
            "resources": [
              {
                "title": "Robot Operating System (ROS) - C++ Client Libraries",
                "url": "https://www.ros.org/"
              },
              {
                "title": "OpenRAVE - C++ Library for Robotics",
                "url": "http://openrave.org/"
              }
            ]
          },
          {
            "name": "C++ Quantum Computing",
            "resources": [
              {
                "title": "Microsoft Quantum Development Kit",
                "url": "https://learn.microsoft.com/en-us/azure/quantum/"
              },
              {
                "title": "Cirq - C++ Library for Quantum Computing",
                "url": "https://quantumai.google/cirq"
              }
            ]
          },
          {
            "name": "C++ Game Development",
            "resources": [
              {
                "title": "SFML - Simple and Fast Multimedia Library",
                "url": "https://www.sfml-dev.org/"
              },
              {
                "title": "Godot Engine - C++ Game Development",
                "url": "https://godotengine.org/"
              }
            ]
          },
          {
            "name": "C++ Embedded Systems",
            "resources": [
              {
                "title": "mbed - C++ Platform for IoT",
                "url": "https://os.mbed.com/"
              },
              {
                "title": "Embedded Systems with Modern C++",
                "url": "https://www.embedded.com/embedded-internet-of-things-with-c/"
              }
            ]
          },
          {
            "name": "C++ Data Structures and Algorithms",
            "resources": [
              {
                "title": "GeeksforGeeks - Data Structures in C++",
                "url": "https://www.geeksforgeeks.org/data-structures/"
              },
              {
                "title": "LeetCode - C++ Solutions",
                "url": "https://leetcode.com/problemset/all/?topicSlugs=cpp"
              }
            ]
          },
          {
            "name": "C++ Concurrency",
            "resources": [
              {
                "title": "Concurrency in Action by Anthony Williams",
                "url": "https://www.oreilly.com/library/view/c-concurrency-in/9781617294693/"
              },
              {
                "title": "The C++ Standard Library - A Tutorial and Reference",
                "url": "https://www.cppstdlib.com/"
              }
            ]
          },
          {
            "name": "C++ Metaprogramming",
            "resources": [
              {
                "title": "C++ Templates - The Complete Guide",
                "url": "https://en.cppreference.com/w/cpp/language/templates"
              },
              {
                "title": "Modern C++ Metaprogramming",
                "url": "https://blog.petrzemek.net/2016/08/17/modern-c-metaprogramming/"
              }
            ]
          },
          {
            "name": "C++ Security",
            "resources": [
              {
                "title": "Secure Coding in C and C++",
                "url": "https://www.securecoding.cert.org/confluence/display/cplusplus/"
              },
              {
                "title": "C++ Core Guidelines",
                "url": "https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md"
              }
            ]
          },
          {
            "name": "C++ Performance Optimization",
            "resources": [
              {
                "title": "CppCon - C++ Performance Talks",
                "url": "https://www.youtube.com/playlist?list=PLsSW_VuPQGZtW8k8CxyRfIgHjPn0XchE0"
              },
              {
                "title": "Optimizing Software in C++",
                "url": "https://www.agner.org/optimize/"
              }
            ]
          },
          {
            "name": "C++ Robotics",
            "resources": [
              {
                "title": "Robot Operating System (ROS) - C++ Client Libraries",
                "url": "https://www.ros.org/"
              },
              {
                "title": "OpenRAVE - C++ Library for Robotics",
                "url": "http://openrave.org/"
              }
            ]
          },
          {
            "name": "C++ Quantum Computing",
            "resources": [
              {
                "title": "Microsoft Quantum Development Kit",
                "url": "https://learn.microsoft.com/en-us/azure/quantum/"
              },
              {
                "title": "Cirq - C++ Library for Quantum Computing",
                "url": "https://quantumai.google/cirq"
              }
            ]
          },
          {
            "name": "C++ Game Development",
            "resources": [
              {
                "title": "SFML - Simple and Fast Multimedia Library",
                "url": "https://www.sfml-dev.org/"
              },
              {
                "title": "Godot Engine - C++ Game Development",
                "url": "https://godotengine.org/"
              }
            ]
          },
          {
            "name": "C++ Embedded Systems",
            "resources": [
              {
                "title": "mbed - C++ Platform for IoT",
                "url": "https://os.mbed.com/"
              },
              {
                "title": "Embedded Systems with Modern C++",
                "url": "https://www.embedded.com/embedded-internet-of-things-with-c/"
              }
            ]
          },
          {
            "name": "C++ Networking",
            "resources": [
              {
                "title": "Boost.Asio - Networking Library",
                "url": "https://www.boost.org/doc/libs/1_77_0/doc/html/boost_asio.html"
              },
              {
                "title": "Poco C++ Libraries - Net Module",
                "url": "https://pocoproject.org/docs/Poco.Net.html"
              }
            ]
          },
          {
            "name": "C++ Software Design Patterns",
            "resources": [
              {
                "title": "SourceMaking - Design Patterns in C++",
                "url": "https://sourcemaking.com/design_patterns"
              },
              {
                "title": "Refactoring.Guru - C++ Design Patterns",
                "url": "https://refactoring.guru/design-patterns/cpp"
              }
            ]
          },
          {
            "name": "C++ Robotics",
            "resources": [
              {
                "title": "Robot Operating System (ROS) - C++ Client Libraries",
                "url": "https://www.ros.org/"
              },
              {
                "title": "OpenRAVE - C++ Library for Robotics",
                "url": "http://openrave.org/"
              }
            ]
          },
          {
            "name": "C++ Quantum Computing",
            "resources": [
              {
                "title": "Microsoft Quantum Development Kit",
                "url": "https://learn.microsoft.com/en-us/azure/quantum/"
              },
              {
                "title": "Cirq - C++ Library for Quantum Computing",
                "url": "https://quantumai.google/cirq"
              }
            ]
          },
          {
            "name": "C++ Game Development",
            "resources": [
              {
                "title": "SFML - Simple and Fast Multimedia Library",
                "url": "https://www.sfml-dev.org/"
              },
              {
                "title": "Godot Engine - C++ Game Development",
                "url": "https://godotengine.org/"
              }
            ]
          },
          {
            "name": "C++ Embedded Systems",
            "resources": [
              {
                "title": "mbed - C++ Platform for IoT",
                "url": "https://os.mbed.com/"
              },
              {
                "title": "Embedded Systems with Modern C++",
                "url": "https://www.embedded.com/embedded-internet-of-things-with-c/"
              }
            ]
          },
          {
            "name": "C++ Networking",
            "resources": [
              {
                "title": "Boost.Asio - Networking Library",
                "url": "https://www.boost.org/doc/libs/1_77_0/doc/html/boost_asio.html"
              },
              {
                "title": "Poco C++ Libraries - Net Module",
                "url": "https://pocoproject.org/docs/Poco.Net.html"
              }
            ]
          },
          {
            "name": "C++ Compiler Optimizations",
            "resources": [
              {
                "title": "Compiler Explorer",
                "url": "https://godbolt.org/"
              },
              {
                "title": "C++ Optimizations - A Practical Guide",
                "url": "https://www.agner.org/optimize/calling_conventions.pdf"
              }
            ]
          },
          {
            "name": "C++ Code Style Guidelines",
            "resources": [
              {
                "title": "Google C++ Style Guide",
                "url": "https://google.github.io/styleguide/cppguide.html"
              },
              {
                "title": "CppCon - Bjarne Stroustrup's C++ Style and Technique FAQ",
                "url": "https://www.stroustrup.com/bs_faq2.html"
              }
            ]
          },
          // Add more topics and resources here...
        ]
      }
    }
    


    return (
      <div className="course-topics-container">
        <h1 className="header">C++ Topics</h1>
        <ul className="topics-list">
          {cppData.cpp.topics.map((topic, index) => (
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
      {CppTopics()}
    </div>
  );
};

export default Cpp;
