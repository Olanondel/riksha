import React, {memo} from 'react';
import FoodCard from "../FoodCard";

const menus = [
  { id: 1, title: 'Ролл "Филадельфия"', components: 'Лосось, сыр "Филадельфия", огурец, авокадо', weight: '200 грамм', calories: '130 Ккал', oldPrice: '269 ₽', targetPrice: '219 ₽ ', tags: [{ text: "Горячий ролл", icon: "hot" }], status: 'top', image: require('../../assets/images/cards/top/top-1.png')  },
  { id: 1, title: 'Ролл "Филадельфия"', components: 'Лосось, сыр "Филадельфия", огурец, авокадо', weight: '200 грамм', calories: '130 Ккал', oldPrice: '269 ₽', targetPrice: '219 ₽ ', tags: [{ text: "Горячий ролл", icon: "hot" }], status: 'top', image: require('../../assets/images/cards/top/top-2.png')  },
  { id: 1, title: 'Ролл "Филадельфия"', components: 'Лосось, сыр "Филадельфия", огурец, авокадо', weight: '200 грамм', calories: '130 Ккал', oldPrice: '269 ₽', targetPrice: '219 ₽ ', tags: [{ text: "Горячий ролл", icon: "hot" }], status: 'top', image: require('../../assets/images/cards/top/top-3.png')  },
]

const TabsMenu = memo(({ className }) => {
  return (
    <div className={ "tabs-menu " + className }>
      <div className="container">
        <div className="tabs-menu__nav">
          <a href="#1" className="tabs-menu__nav-item tabs-menu__nav-item--active">Топ позиции</a>
          <a href="#2" className="tabs-menu__nav-item">Новинки</a>
        </div>
        <div className="tabs-menu__content">
          { menus?.map(menu => (
            <div className="tabs-menu__item">
              <FoodCard food={menu} />
            </div>
          )) }
        </div>
      </div>
    </div>
  );
});

export default TabsMenu;
