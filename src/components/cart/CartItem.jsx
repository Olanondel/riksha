import React from 'react';
import pizza from 'assets/images/pizza.jpg'
import {ReactComponent as CartIcon} from "assets/svg/remove.svg";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__preview">
        <img src={pizza} className="cart-item__image" alt="category" />
        <div className="cart-item__info">
          <div className="cart-item__title">Пицца “Рикша”</div>
          <div className="cart-item__type">30 см * <span className="cart-item__variants">50 cm</span></div>
        </div>
      </div>
      <div className="cart-item__controls">
        <div className="cart-item__counts">
          <button className="cart-item__button">-</button>
          <span className="cart-item__count">99</span>
          <button className="cart-item__button">+</button>
        </div>
        <div className="cart-item__price">510 P</div>
        <button className="cart-item__remove">
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
