import React, {useState} from 'react';
import { ReactComponent as CartIcon } from "assets/svg/cart.svg";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const cart = [1]

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="cart">
      <div className="cart__control">
        <div className="cart__balance">1000 P</div>
        <div className="cart__separator">
          |
        </div>
        <button onClick={() => setIsOpen(isOpen => !isOpen)} className="cart__button">
          <span className="cart__foods-indicator">3</span>
          <CartIcon />
        </button>
      </div>
      <div className={ isOpen ? ['cart__wrapper', 'cart__wrapper--open'].join(' ') :'cart__wrapper' }>
        <div className={ cart.length ? "cart__foods" : ['cart__foods', 'cart__foods__empty'].join(' ') }>
          { !cart.length && <CartEmpty /> }
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart__controls">
          <div className="cart__price">Сумма заказа: <span>0 ₽</span></div>
          <button className="cart__action">В каталог</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
