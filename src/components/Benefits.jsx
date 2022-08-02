import React from 'react';
import {ReactComponent as BenefitIcon1} from "assets/svg/benefits/benefit-1.svg";
import {ReactComponent as BenefitIcon2} from "assets/svg/benefits/benefit-2.svg";
import {ReactComponent as BenefitIcon3} from "assets/svg/benefits/benefit-3.svg";
import {ReactComponent as BenefitIcon4} from "assets/svg/benefits/benefit-4.svg";

const Benefits = ({ className }) => {
  return (
    <section className={"benefits " + className}>
      <div className="container">
        <div className="benefits__inner">
          <div className="benefits__benefit benefit">
            <div className="benefit__icon"><BenefitIcon1 /></div>
            <div className="benefit__title">доставка</div>
            <div className="benefit__text">при заказе от 600 ₽ </div>
          </div>
          <div className="benefits__benefit benefit">
            <div className="benefit__icon"><BenefitIcon2 /></div>
            <div className="benefit__title">за 60 мин</div>
            <div className="benefit__text">или проморол за опоздание</div>
          </div>
          <div className="benefits__benefit benefit">
            <div className="benefit__icon"><BenefitIcon3 /></div>
            <div className="benefit__title">бонусы</div>
            <div className="benefit__text">бонусная система 1 ₽ = 1 бонус</div>
          </div>
          <div className="benefits__benefit benefit">
            <div className="benefit__icon"><BenefitIcon4 /></div>
            <div className="benefit__title">продукты</div>
            <div className="benefit__text">Никаких заготовок!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
