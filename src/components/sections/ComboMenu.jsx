import React, {memo} from 'react';
import SectionTitle from "../ui/SectionTitle";
import FoodCard from "../FoodCard";

const combo = [
  { id: 1, title: 'Комбо микс', components: 'Пицца Баварская; Сет Фирменный;', weight: '200 грамм', calories: '130 Ккал', oldPrice: '269 ₽', targetPrice: '219 ₽ ', status: 'new', combo: true, image: require('../../assets/images/cards/combo/combo-1.jpg')  },
  { id: 1, title: 'Дабл пицца', components: 'Пицца Баварская; Пицца 4 Сыра; Coca-Cola (1 л)', weight: '200 грамм', calories: '130 Ккал', oldPrice: '269 ₽', targetPrice: '219 ₽ ', combo: true, image: require('../../assets/images/cards/combo/combo-2.jpg')  },
  { id: 1, title: 'Комбо Small party', components: 'Пицца Неаполитано; Пицца Царская; Сет Суши шок;', weight: '200 грамм', calories: '130 Ккал', oldPrice: '269 ₽', targetPrice: '219 ₽ ', combo: true, image: require('../../assets/images/cards/combo/combo-3.jpg')  },
]

const ComboMenu = memo(({ className }) => {
  return (
    <div className={ "combo-menu " + className }>
      <div className="container">
        <SectionTitle text="Комбо меню" iconModifier="combo" className="combo-menu__title" />
        <div className="combo-menu__content">
          { combo?.map(el => (
            <div className="combo-menu__item">
              <FoodCard food={el} />
            </div>
          )) }
        </div>
      </div>
    </div>
  );
});

export default ComboMenu;
