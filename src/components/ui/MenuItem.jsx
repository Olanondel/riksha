import React from 'react';
import MenuIconSelector from "../MenuIconSelector";

const MenuItem = ({icon, text}) => {
  return (
    <div className="menu-item">
      <div className="menu-item__icon">
        <MenuIconSelector title={icon} />
      </div>
      <div className="menu-item__link">{text}</div>
    </div>
  );
};

export default MenuItem;
