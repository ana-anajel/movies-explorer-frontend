import React from 'react';
import Planet from '../../images/planetDesktop.png';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-<br />разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот<br />проект и его создателя.</p>
        <div className='promo__box-link'><a href='https://ya.ru/' className="promo__link">Узнать больше</a></div>
      </div>
      <img className='promo__image' alt="Изображение планеты из текстовых фраз." src={Planet} />
    </section>
  );
}

export default Promo;