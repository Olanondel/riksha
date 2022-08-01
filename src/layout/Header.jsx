import React from 'react';
import Logo from 'assets/images/header_logo.png'
import {menu} from "../data";
import Cart from "../components/Cart";

const Header = () => {
  return (
    <header className="header">

      <div className="header__top">
        <div className="container">
          <div className="header__logo-wrapper">
            <img src={Logo} alt="logo" className="header__logo" />
          </div>

          <div className="header__top-content">
            <ul className="header__info">
              <li className="header__info-item">О нас</li>
              <li className="header__info-item">Доставка и оплата</li>
              <li className="header__info-item">Контакты</li>
              <li className="header__info-item">Бонусы</li>
              <li className="header__info-item">Вакансии</li>
            </ul>

            <div className="header__tel">
              <a href="tel: 4444" className="header__tel-number">+7 (495) 617-14-24</a>
              <div className="header__schedule">c 10:00 до 23:00</div>
            </div>

            <Cart />
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          2
        </div>
      </div>
    </header>
  );
};

export default Header;
