import React, {memo, useState} from 'react';
import SectionTitle from "../ui/SectionTitle";
import {menu} from "../../data";
import MenuIconSelector from "../MenuIconSelector";
import {ReactComponent as ArrowIcon} from "assets/svg/arrow.svg";
import FoodCard from "../FoodCard";
import Pagination from "../Pagination";

const menus = [
  {
    id: 1,
    title: 'Пицца “Рикша”',
    components: 'соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто.',
    weight: '200 грамм',
    calories: '130 Ккал',
    oldPrice: '269 ₽',
    targetPrice: '219 ₽ ',
    tags: [],
    status: 'top',
    image: require('../../assets/images/cards/category/pizza.jpg')
  },
  {
    id: 1,
    title: 'Пицца “Рикша”',
    components: 'соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто.',
    weight: '200 грамм',
    calories: '130 Ккал',
    oldPrice: '269 ₽',
    targetPrice: '219 ₽ ',
    tags: [],
    status: 'new',
    image: require('../../assets/images/cards/category/pizza.jpg')
  },
  {
    id: 1,
    title: 'Пицца “Цезарио”',
    components: 'соус бешамель, помидоры, хрустящий салат, пармезан, куриное мясо, сыр моцарелла, перепелиные яйца, соус "Цезарь".',
    weight: '200 грамм',
    calories: '130 Ккал',
    oldPrice: '269 ₽',
    targetPrice: '219 ₽ ',
    tags: [],
    status: 'top',
    image: require('../../assets/images/cards/category/pizza.jpg')
  },
  {
    id: 1,
    title: 'Пицца “Рикша”',
    components: 'соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто.',
    weight: '200 грамм',
    calories: '130 Ккал',
    oldPrice: '269 ₽',
    targetPrice: '219 ₽ ',
    tags: [],
    status: 'top',
    image: require('../../assets/images/cards/category/pizza.jpg')
  },
  {
    id: 1,
    title: 'Пицца “Рикша”',
    components: 'соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто.',
    weight: '200 грамм',
    calories: '130 Ккал',
    oldPrice: '269 ₽',
    targetPrice: '219 ₽ ',
    tags: [],
    status: 'new',
    image: require('../../assets/images/cards/category/pizza.jpg')
  },
  {
    id: 1,
    title: 'Пицца “Цезарио”',
    components: 'соус бешамель, помидоры, хрустящий салат, пармезан, куриное мясо, сыр моцарелла, перепелиные яйца, соус "Цезарь".',
    weight: '200 грамм',
    calories: '130 Ккал',
    oldPrice: '269 ₽',
    targetPrice: '219 ₽ ',
    tags: [],
    status: 'top',
    image: require('../../assets/images/cards/category/pizza.jpg')
  },
]

const Category = memo(({className}) => {
  const [category, setCategory] = useState('Пицца')

  return (
    <section className={"category-section " + className}>
      <div className="container">
        <SectionTitle text="Категории" iconModifier="category" className="category-section__title"/>
        <ul className="category-section__nav">
          {
            menu?.map((el, index) => (
              <li onClick={() => setCategory(el.category)}
                  className={category === el.category ? "category-section__nav-item category-section__nav-item--active" : 'category-section__nav-item'}>
                <MenuIconSelector title={el.icon}/>
                <span className="category-section__nav-item-text">{el.category}</span>
              </li>
            ))}
        </ul>
        <div className="category-section__content">
          {menus?.map(item => (
            <div className="category-section__item">
              <FoodCard food={item}/>
            </div>
          ))}
        </div>
        <div className="category-section__footer">
          <Pagination />
          <a href="#1" className="category-section__to-catalog">Перейти в каталог <div
            className="category-section__to-catalog-icon"><ArrowIcon/></div></a>
        </div>
      </div>
    </section>
  );
});

export default Category;
