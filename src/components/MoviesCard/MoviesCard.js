import React, { useState } from 'react';
import Mark from '../../images/mark.svg';
import MarkActiv from '../../images/markActiv.svg'
import './MoviesCard.css';
import '../Animation/Animation.css';
import { MOVIES_API } from "../../constants/Api";

function MoviesCard({ isActiv, card, onCardDelete, onCardLike, onCardClick }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div className={`card ${isLiked ? 'activ' : ''}`}>

      <div className='card__info-box'>

        <div className='card__text-box'>
          <h2 className='card__title'>{card.nameRU}</h2>
          <p className='card__subtitle'>1ч 47м</p>
        </div>

        <button className='card__button animation__button' onClick={handleLike}>
          <img src={isLiked ? MarkActiv : Mark} className='card__mark' alt="Иконка добавить в закладки. Флажёк в кругу." />
        </button>

      </div>

      <img src={`${MOVIES_API}${card.image.url}`} className='card__image' alt="Фото в карточке фильма." />
    </div>
  );
}

export default MoviesCard;