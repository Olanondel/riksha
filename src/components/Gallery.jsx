import React from 'react';
import img_1 from 'assets/images/gallery/1.jpg'
import img_2 from 'assets/images/gallery/2.jpg'
import img_3 from 'assets/images/gallery/3.jpg'
import img_4 from 'assets/images/gallery/4.jpg'
import img_5 from 'assets/images/gallery/5.jpg'
import img_6 from 'assets/images/gallery/6.jpg'
import {ReactComponent as InstagramIcon} from "assets/svg/btn-inst.svg";

const Gallery = ({ className }) => {
  return (
    <section className={ "gallery " + className}>
      <div className="container">
        <div className="gallery__header">
          <div className="gallery__title">А вы уже подписались на наш <span className="accent">Instagram?</span></div>
          <a href="https://www.instagram.com/" target="_blank" className="gallery__button my-btn"> <span className="gallery__button-icon"><InstagramIcon /></span> @riksha_sushi</a>
        </div>
        <div className="gallery__main">
          <img src={img_1} alt="food" className="gallery__item" />
          <img src={img_2} alt="food" className="gallery__item" />
          <img src={img_3} alt="food" className="gallery__item" />
          <img src={img_4} alt="food" className="gallery__item" />
          <img src={img_5} alt="food" className="gallery__item" />
          <img src={img_6} alt="food" className="gallery__item" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
