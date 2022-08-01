import React from 'react';
import {ReactComponent as EmptyIcon} from "assets/svg/cart-empty.svg";

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <EmptyIcon />
      <div className="cart-empty__text">Ваша корзина пуста</div>
    </div>
  );
};

export default CartEmpty;
