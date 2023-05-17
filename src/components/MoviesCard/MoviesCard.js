import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mark from '../../images/mark.svg';
import MarkActiv from '../../images/markActiv.svg';
import DeleteMark from '../../images/delete.svg';
import './MoviesCard.css';
import '../Animation/Animation.css';
import { MOVIES_API } from "../../constants/Api";

function MoviesCard({ addMovie, card, deleteMovie, type }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    addMovie(card);
    setIsLiked(!isLiked);
  }


  return (
    <div className='card'>

      <div className='card__info-box'>

        <div className='card__text-box'>
          <h2 className='card__title'>{card.nameRU}</h2>
          <p className='card__subtitle'>
            {card.duration > 60 ? `${Math.floor(card.duration / 60)}ч ${card.duration % 60}м` : `${card.duration}м`}
          </p>
        </div>

        {
          type ? <button className={`card__button ${isLiked ? 'card__button_activ' : ''} animation__button`} onClick={handleLike}>
            <img src={isLiked ? MarkActiv : Mark} className='card__mark' alt="Иконка добавить в закладки. Флажёк в кругу." />
          </button>
            : <button className={`card__button animation__button`} onClick={deleteMovie}>
              <img src={DeleteMark} className='card__mark' alt="Иконка добавить в закладки. Флажёк в кругу." />
            </button>
        }

      </div>

      <Link to={card.trailerLink} target="_blank" ><img src={MOVIES_API + card.image.url} className='card__image' alt="Фото в карточке фильма." /></Link>
    </div>
  );
}

export default MoviesCard;