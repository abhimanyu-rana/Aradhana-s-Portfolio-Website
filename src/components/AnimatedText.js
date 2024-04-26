import React from 'react';

const AnimatedText = ({ text, className = "" }) => {
  // Check if text is undefined, null, empty, or not a string
  if (!text || typeof text !== 'string') {
    return null; // If any of the above conditions are true, render nothing
  }

  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <h1 className={`inline-block w-full text-dark font-bold capitalize text-8x1 ${className}`}>
        {text.split(" ").map((word, index) => (
          <span key={word + '-' + index}>
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
