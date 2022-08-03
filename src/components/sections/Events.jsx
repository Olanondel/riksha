import React, {memo} from 'react';
import SectionTitle from "../SectionTitle";

const Events = memo(({ className }) => {
  return (
    <div className={'events-section ' + className}>
      <div className="container">
        <SectionTitle className="events-section__title" text="Акции" iconModifier="events" />

        <div className="events-section__content">
          <div className="events-section__item">
            <div className="events-section__card event-card">
              <div className="event-card__title">Празднуй день рождения вместе с нами</div>
              <div className="event-card__text">Ролл в подарок при заказе в день рождения</div>
            </div>
          </div>
          <div className="events-section__item">
            <div className="events-section__card event-card event-card--img-2">
              <div className="event-card__title">Доставим заказ за 60 мин</div>
              <div className="event-card__text">или проморол за опоздание</div>
            </div>
          </div>
          <div className="events-section__item">
            <div className="events-section__card event-card event-card--img-3">
              <div className="event-card__title">Приведи друга </div>
              <div className="event-card__text">и получи 250 ₽ на бонусный счет</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Events;
