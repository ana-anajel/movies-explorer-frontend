import React from 'react';
import Add from '../../images/add.png';
import CardImage from '../../images/card-image.png'
import './MoviesCard.css';

function MoviesCard() {
  return (
    <div className="card">

      <div className='card__name'>
        <div className='card__text'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__subtitle'>1ч 47м</p>
        </div>
        <img src={Add} className='card__icon-add' alt="Иконка добавить. Флажёк в кругу." />
      </div>

      <img src={CardImage} className='card__image' alt="Фото в карточке фильма." />
    </div>
  );
}

export default MoviesCard;