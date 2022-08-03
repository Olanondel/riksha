import React, {useState} from 'react';
import {ReactComponent as ArrowIcon} from "assets/svg/arrow.svg";

const Pagination = ({ total = [1, 2, 3, 4] }) => {
  const [current, setCurrent] = useState(2)

  const prev = () => {
    if (current > 1) {
      setCurrent(prev => prev - 1)
    }
  }

  const next = () => {
    if (current < total.length) {{
      setCurrent(prev => prev + 1)
    }}
  }

  return (
    <div className="pagination">
      <div onClick={prev} className="pagination__button"><ArrowIcon /></div>
      <div className="pagination__items">
        { total.map(el => (
          <div onClick={() => setCurrent(el)} className={el === current ? "pagination__item pagination__item--active" : "pagination__item"}>
            <span className="pagination__item-text">{el}</span>
          </div>
        )) }
      </div>
      <div onClick={next} className="pagination__button"><ArrowIcon /></div>
    </div>
  );
};

export default Pagination;
