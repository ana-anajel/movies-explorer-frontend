import React, { useState } from 'react';
import Mark from '../../images/mark.svg';
import MarkActiv from '../../images/markActiv.svg'
import CardImage from '../../images/card-image.png'
import './MoviesCard.css';
import '../Animation/Animation.css';

function MoviesCard({ isActiv }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  }
  return (
    <div className={`card ${isLiked ? 'activ' : ''}`}>

      <div className='card__info-box'>

        <div className='card__text-box'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__subtitle'>1ч 47м</p>
        </div>

        <button className='card__button animation__button' onClick={handleLike}>
          <img src={isLiked ? MarkActiv : Mark} className='card__mark' alt="Иконка добавить в закладки. Флажёк в кругу." />
        </button>

      </div>

      <img src={CardImage} className='card__image' alt="Фото в карточке фильма." />
    </div>
  );
}

export default MoviesCard;