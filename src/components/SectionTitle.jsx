import React from 'react';

const SectionTitle = ({ text, children }) => {
  return (
    <h3 className="section-title">{text} {children}</h3>
  );
};

export default SectionTitle;
