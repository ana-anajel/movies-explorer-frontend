import React from 'react';
import { Link } from 'react-router-dom';
import Planet from '../../images/planet.svg';
import './Promo.css';
import '../Animation/Animation.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <div className='promo__box-link'>
          <Link to='/' className="promo__link animation">Узнать больше</Link>
        </div>
      </div>
      <img className='promo__image' alt="Изображение планеты из текстовых фраз." src={Planet} />
    </section>
  );
}

export default Promo;