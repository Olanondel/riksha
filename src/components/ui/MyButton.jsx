import React from 'react';

const MyButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={ "my-btn " + className }
    >
      {children}
    </button>
  );
};

export default MyButton;
