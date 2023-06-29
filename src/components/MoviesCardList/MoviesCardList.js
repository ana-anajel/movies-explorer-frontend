import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import '../Animation/Animation.css';
import {
  WINDOW__SISE_DESKTOP,
  WINDOW__SISE_TABLET,
  MOVIES_ROW_DESKTOP,
  MOVIES_ROW_TABLET,
  MOVIES_ROW_MOBILE,
  MOVIES_LINE_DESKTOP,
  MOVIES_LINE_MOBILE
} from '../../constants/constants';

function MoviesCardList({ filteredMovies, addMovie, deleteMovie, type }) {
  const [sise, setSise] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > WINDOW__SISE_DESKTOP) {
        setSise(MOVIES_LINE_DESKTOP);
        setStartIndex(MOVIES_ROW_DESKTOP);
      } else if (window.innerWidth > WINDOW__SISE_TABLET) {
        setSise(MOVIES_LINE_MOBILE);
        setStartIndex(MOVIES_ROW_TABLET);
      } else {
        setSise(MOVIES_LINE_MOBILE);
        setStartIndex(MOVIES_ROW_MOBILE);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleShowMore();
  }, [startIndex, filteredMovies])

  function handleShowMore() {
    if (filteredMovies.length > startIndex + sise) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }

  function handleClick() {
    setStartIndex(startIndex + sise);
    handleShowMore()
  }

  const moviesElements = filteredMovies.slice(0, showMore ? startIndex : filteredMovies.length).map((card) => (

    < MoviesCard
      addMovie={addMovie}
      deleteMovie={deleteMovie}
      key={card.id}
      card={card}
      type={type}
    />
  ))

  return (
    <section className="cards">
      <div className='cards__list'>
        {moviesElements}
      </div>
      <button onClick={handleClick} className={`cards__button-more ${showMore ? 'animation__button' : 'disabled'}`}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;