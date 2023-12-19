import React from 'react';
import './PagesCss/Blog.css'; // Import your CSS file for styling

const Blog = () => {
  try {
    // Dynamic blog content array
    const blogContent = [
      {
        title: 'React Hooks: A Deep Dive',
        date: '2023-12-15',
        content: 'In this blog post, we explore the intricacies of React Hooks and how they can enhance your component logic.',
      },
      {
        title: 'Building Responsive UIs with Flexbox',
        date: '2023-12-10',
        content: 'Learn how to create responsive user interfaces using the Flexbox layout model for CSS.',
      },
      // Add more blog entries as needed
    ];

    return (
      <div className="blog-page-container dark-mode">
        <h1>Blog</h1>
        {blogContent.map((entry, index) => (
          <div key={index} className="blog-entry">
            <h2>{entry.title}</h2>
            <p className="blog-date">{entry.date}</p>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error loading blog content:', error);
    // Display a 404 error component here
    return <NotFound404 />;
  }
};

const NotFound404 = () => (
  <div className="not-found-container dark-mode">
    <h2>404 Not Found</h2>
    <p>Sorry, the requested blog content could not be loaded.</p>
  </div>
);

export default Blog;
