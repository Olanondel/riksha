import React from 'react';
import {ReactComponent as ArrowIcon} from "assets/svg/arr.svg";

const GoTop = () => {
  return (
    <button className="go-top">
      <ArrowIcon />
      <span className="go-top__text">Наверх</span>
    </button>
  );
};

export default GoTop;
