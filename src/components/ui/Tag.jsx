import React from 'react';
import TagIconSelector from "../TagIconSelector";

const Tag = ({ text, icon }) => {
  return (
    <div className="tag">
      <TagIconSelector id={icon} />
      <div className="tag__text">{text}</div>
    </div>
  );
};

export default Tag;
