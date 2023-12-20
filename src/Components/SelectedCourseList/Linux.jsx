// Python.jsx
import React from 'react';
import '../SelectedCourseList/AllSelectedCoursesCSS.css'


const Linux = () => {

  
  const LinuxTopics = () => {
    const linuxData = {
      "linux": {
        "topics": [
          {
            "name": "Introduction to Linux",
            "resources": [
              {
                "title": "Linux.org - Introduction to Linux",
                "url": "https://www.linux.org/learning/intro/"
              },
              {
                "title": "The Linux Foundation - Introduction to Linux",
                "url": "https://training.linuxfoundation.org/resources/"
              }
            ]
          },
          {
            "name": "Linux Basics",
            "resources": [
              {
                "title": "Ubuntu Documentation - Basic Commands",
                "url": "https://help.ubuntu.com/community/UsingTheTerminal"
              },
              {
                "title": "LinuxCommand.org - Learning the Shell",
                "url": "http://linuxcommand.org/lc3_learning_the_shell.php"
              }
            ]
          },
          {
            "name": "Linux System Administration",
            "resources": [
              {
                "title": "Linux Handbook - System Administration Basics",
                "url": "https://linuxhandbook.com/linux-administration/"
              },
              {
                "title": "The Geek Stuff - Linux System Administrator's Guide",
                "url": "https://www.thegeekstuff.com/linux-101-hacks-ebook/"
              }
            ]
          },
          {
            "name": "Linux Shell Scripting",
            "resources": [
              {
                "title": "Bash Scripting Tutorial",
                "url": "https://ryanstutorials.net/bash-scripting-tutorial/"
              },
              {
                "title": "Shell Scripting - Learn Linux",
                "url": "https://www.learnlinux.org.in/"
              }
            ]
          },
          {
            "name": "Linux Networking",
            "resources": [
              {
                "title": "Linux Networking Documentation",
                "url": "https://www.linux.org/docs/network/"
              },
              {
                "title": "Linux Journal - Networking Articles",
                "url": "https://www.linuxjournal.com/content/networking"
              }
            ]
          },
          {
            "name": "Linux Security",
            "resources": [
              {
                "title": "LinuxSecurity.com - Linux Security",
                "url": "https://www.linuxsecurity.com/"
              },
              {
                "title": "SANS Institute - Linux Security Essentials",
                "url": "https://www.sans.org/cyber-security-courses/linux-security-essentials/"
              }
            ]
          },
          {
            "name": "Linux Kernel Development",
            "resources": [
              {
                "title": "Linux Kernel Documentation",
                "url": "https://www.kernel.org/doc/html/latest/"
              },
              {
                "title": "LWN.net - Kernel Page",
                "url": "https://lwn.net/Kernel/"
              }
            ]
          },
          {
            "name": "Containerization with Docker",
            "resources": [
              {
                "title": "Docker Documentation",
                "url": "https://docs.docker.com/"
              },
              {
                "title": "Docker - Getting Started",
                "url": "https://docs.docker.com/get-started/"
              }
            ]
          },
          {
            "name": "Linux Virtualization",
            "resources": [
              {
                "title": "KVM Documentation",
                "url": "https://www.linux-kvm.org/"
              },
              {
                "title": "VirtualBox Documentation",
                "url": "https://www.virtualbox.org/wiki/Documentation"
              }
            ]
          },
          {
            "name": "Linux File Systems",
            "resources": [
              {
                "title": "Linux Filesystem Hierarchy Standard",
                "url": "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html"
              },
              {
                "title": "Filesystem Hierarchy Standard - Wikipedia",
                "url": "https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard"
              }
            ]
          }
        ]
      }
    };


    return (
      <div className="course-topics-container">
        <h1 className="header">Linux Topics</h1>
        <ul className="topics-list">
          {linuxData.linux.topics.map((topic, index) => (
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
      {LinuxTopics()}
    </div>
  );
};

export default Linux;
