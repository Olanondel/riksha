import React, {useRef} from 'react';
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import { Navigation, Parallax } from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/parallax'
import {ReactComponent as ArrowIcon} from "assets/svg/arrow.svg";

const MainSlider = () => {
  return (
    <div className="container main-slider__container">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Parallax]}
        speed={800}
        parallax={true}
        navigation={{
          prevEl: '.main-slider__prev',
          nextEl: '.main-slider__next',
          disabledClass: 'main-slider__disabled'
        }}
        className="main-slider"
      >
        <SwiperSlide className="main-slider__slide">
          <div className="main-slider__offer">Калифорния <span className="main-slider__accent">в подарок</span> при первом заказе</div>
          <div className="main-slider__price">от 1500 ₽</div>

          <div className="main-slider__button">Подробнее</div>
        </SwiperSlide>
        <SwiperSlide className="main-slider__slide">
          <div className="main-slider__offer">Калифорния <span className="main-slider__accent">в подарок</span> при первом заказе</div>
          <div className="main-slider__price">от 1500 ₽</div>

          <div className="main-slider__button">Подробнее</div>
        </SwiperSlide>
        <SwiperSlide className="main-slider__slide">
          <div className="main-slider__offer">Калифорния <span className="main-slider__accent">в подарок</span> при первом заказе</div>
          <div className="main-slider__price">от 1500 ₽</div>

          <div className="main-slider__button">Подробнее</div>
        </SwiperSlide>
      </Swiper>
      <div className="main-slider__prev main-slider__nav">
        <ArrowIcon />
      </div>
      <div className="main-slider__next main-slider__nav">
        <div style={{ transform: 'rotate(180deg)' }}><ArrowIcon /></div>
      </div>
    </div>
  );
};

export default MainSlider;
