import React from 'react';
import img_1 from 'assets/images/about/about-1.jpg'
import img_2 from 'assets/images/about/about-2.jpg'
import SectionTitle from "../ui/SectionTitle";

const AboutCompany = ({ className }) => {
  return (
    <section className={ "about-company " + className }>
      <div className="container about-company__container">
        <div className="about-company__content">
          <div className="about-company__about">
            <SectionTitle text="О компании" className="about-company__title" iconModifier="about" />
            <p className="about-company__text">
              Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и&nbsp;не&nbsp;заставит себя долго ждать. С&nbsp;нами вы&nbsp;сможете забыть о&nbsp;готовке, легко сделать приятное родным и&nbsp;близким, устроить вкусный праздник или расслабится в&nbsp;кругу друзей. Все блюда готовятся исключительно из&nbsp;свежих продуктов и&nbsp;по&nbsp;оригинальным рецептам Нашего шеф-повара.
            </p>
            <p className="about-company__text">
              Любая позиция из&nbsp;Нашего Меню может оказаться у&nbsp;Вас на&nbsp;столе максимум через 60&nbsp;минут! У&nbsp;вас есть возможность сделать предварительный заказ на&nbsp;определенный день и&nbsp;время.
            </p>
          </div>
          <img src={img_1} alt="img" className="about-company__image" />
        </div>
        <img src={img_2} alt="img_2" className="about-company__float-image" />
      </div>
    </section>
  );
};

export default AboutCompany;
