import React from 'react';
import error from '../assets/images/error.png'

const Error = ({ title, description }) => {
  return (
    <div className="error">
      <img src={error} alt="error" className="error__image" />
      <div className="error__content">
        <div className="error__title">Страница не найдена</div>
        <div className="error__description">Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу</div>
        <div className="error__button">На главную</div>
      </div>
    </div>
  );
};

export default Error;
