import React from 'react';
import './PagesCss/FAQs.css'; // Import your CSS file

const FAQs = () => {
  try {
    const faqData = [
      {
        question: 'What is ILN?',
        answer: 'ILN is a short form of Innovate Learn Nexus.',
      },
      {
        question: 'Question 2?',
        answer: 'Answer 2.',
      },
      // Add more FAQs as needed
    ];

    return (
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error loading FAQs:', error);
    // Display a 404 error component here
    return <NotFound404 />;
  }
};

const NotFound404 = () => (
  <div className="not-found-container">
    <h2>404 Not Found</h2>
    <p>Sorry, the requested FAQs could not be loaded.</p>
  </div>
);

export default FAQs;
