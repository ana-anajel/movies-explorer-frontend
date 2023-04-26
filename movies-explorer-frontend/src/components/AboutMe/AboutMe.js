import React from 'react';
import Avatar from '../../images/avatar.png';
import './AboutMe.css';
import Title from '../Title/Title';


function AboutMe() {
  return (
    <section className="about-me">
      {<Title text={'Студент'} />}

      <div className='about-me__container'>
        <div className='about-me__container-text'>
          <h2 className='about-me__title'>Виталий</h2>
          <h3 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h3>
          <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href='ya.ru' className='about-me__link'>Github</a>
        </div>

        <img className='about-me__image' alt='Портретное фото в резюме.' src={Avatar} />

      </div>

    </section>
  );
}

export default AboutMe;