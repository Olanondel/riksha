import React from 'react';
import logo from '../assets/images/logo.png'
import {menu} from "../data";
import { ReactComponent as Facebook } from "assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "assets/svg/instagram.svg";
import { ReactComponent as Vk } from "assets/svg/vk.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a href="/">
          <img src={logo} alt="logo" className="footer__logo" />
        </a>

        <div className="footer__info">
          <ul className="footer__info-list">
            <li className="footer__info-item">О нас</li>
            <li className="footer__info-item">Доставка и оплата</li>
            <li className="footer__info-item">Контакты</li>
          </ul>
          <ul className="footer__social">
            <li className="footer__social-item"><Facebook /></li>
            <li className="footer__social-item"><Instagram /></li>
            <li className="footer__social-item"><Vk /></li>
          </ul>
        </div>
        <div className="footer__categories">
          <ul className="footer__categories-list">
            {
              menu?.map(item => <li className="footer__categories-item">{ item.category }</li>)
            }
          </ul>
        </div>
        <div className="footer__contacts">
          <a href="tel: 4444" className="footer__phone">+7 (495) 617-14-24</a>
          <div className="footer__schedule">c 10:00 до 23:00</div>
          <div className="footer__copyright">&copy; Рикша. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
