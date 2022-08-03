import React from 'react';
import MyButton from "./ui/MyButton";
import pizza from 'assets/images/cards/foods/food-1.png'
import Tag from "./ui/Tag";

const FoodCard = ({food}) => {
  return (
    <div className="food-card">
      <div className="food-card__header">
        {
          food.tags?.length && (<div className="food-card__tags">
            {food.tags.map(tag => <Tag text={tag.text} icon={tag.icon}/>)}
          </div>)
        }
        { food.status && <div className={ [ "food-card__status", `food-card__status--${food.status}` ].join(' ') }>{food.status}</div> }
        { food.image && <div className="food-card__image-wrapper"><img src={ food.image } alt="food" className={ food.combo ? ['food-card__image', 'food-card__image--combo'].join(' ') :  "food-card__image"}/></div> }
      </div>
      <div className="food-card__content">
        <div className="food-card__row">
          <div className="food-card__details">{food.weight} <span className="accent">*</span> {food.calories}</div>
          { food.combo && <div className="food-card__types">
            <button className="food-card__type-btn food-card__type-btn--active">30 см</button>
            <span className="accent">*</span>
            <button className="food-card__type-btn">50 см</button>
            <span></span>
          </div> }
        </div>
        <div className="food-card__title">{ food.title }</div>
        <div className={ food.combo ? ['food-card__components', 'food-card__components--combo'].join(' '): 'food-card__components' }>{ food.components }</div>
      </div>
      <div className="food-card__footer">
        <div className="food-card__prices">
          <div className="food-card__old-price">{ food.oldPrice }</div>
          <div className="food-card__target-price">{ food.targetPrice }</div>
        </div>
        <MyButton className="my-btn--classic">Заказать</MyButton>
      </div>
    </div>
  );
};

export default FoodCard;
