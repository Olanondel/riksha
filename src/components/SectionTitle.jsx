import React from 'react';

const SectionTitle = ({ text, className, iconModifier }) => {
  let classes = ['section-title__text']

  if (iconModifier) {
    classes = [...classes, 'section-title__text--icon', `section-title__text--icon-${iconModifier}`]
  }

  return (
    <h3 className={ "section-title " + className }><span className={classes.join(' ')}>{text}</span></h3>
  );
};

export default SectionTitle;
