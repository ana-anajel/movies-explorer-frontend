import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
  return (
    <div className="cards">
      {/* <h3>Фильмов нет.</h3> */}

      <div className='cards__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />

        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>

      <div className='cards__more'>
        <button className='cards__button'>Ещё</button>
      </div>

    </div>
  );
}

export default MoviesCardList;