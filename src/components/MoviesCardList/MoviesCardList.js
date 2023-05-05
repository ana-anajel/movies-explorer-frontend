import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import '../Animation/Animation.css';

function MoviesCardList() {
  return (
    <div className="cards">
      <div className='cards__list'>

        {/* <p className='cards__list-null'>Фильмов нет.</p> */}

        <MoviesCard isActiv={false} />
        <MoviesCard isActiv={false} />
        <MoviesCard isActiv={true} />
        <MoviesCard isActiv={true} />
        <MoviesCard isActiv={true} />
        <MoviesCard isActiv={true} />
        <MoviesCard isActiv={true} />
        <MoviesCard isActiv={true} />
        <MoviesCard isActiv={false} />
        <MoviesCard isActiv={false} />
        <MoviesCard isActiv={false} />
        <MoviesCard isActiv={false} />

      </div>

      <button className='cards__button-more animation'>Ещё</button>

    </div>
  );
}

export default MoviesCardList;