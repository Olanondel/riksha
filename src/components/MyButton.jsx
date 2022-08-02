import React from 'react';

const MyButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="my-btn"
    >
      {children}
    </button>
  );
};

export default MyButton;
