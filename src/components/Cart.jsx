import React from 'react';
import { ReactComponent as CartIcon } from "assets/svg/cart.svg";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__control">
        <div className="cart__balance">1000 P</div>
        <div className="cart__separator">
          |
        </div>
        <button className="cart__button">
          <span className="cart__foods-indicator">3</span>
          <CartIcon />
        </button>
      </div>
      <div className="cart__content">
      </div>
    </div>
  );
};

export default Cart;
