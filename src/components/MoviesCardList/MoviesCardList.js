import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import '../Animation/Animation.css';

function MoviesCardList({ movies }) {

  // Ширина 1280px — 12 карточек по 3 в ряд.Кнопка «Ещё» загружает по 3 карточки.
  // Ширина 768px — 8 карточек по 2 в ряд.Кнопка «Ещё» загружает по 2 карточки.
  // Ширина от 320px до 480px — 5 карточек по 1 в ряд.Кнопка «Ещё» загружает по 2 карточки.

  const [showButton, setShowButton] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const [sise, setSise] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1030) {
        setSise(3);
        setStartIndex(12);
      } else if (window.innerWidth > 643) {
        setSise(2);
        setStartIndex(8);
      } else {
        setSise(2);
        setStartIndex(5);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleShowMore()
  }, [startIndex])

  function handleShowMore() {
    console.log('menyayem?')
    if (movies.length > startIndex + sise) {
      setShowMore(true);
      console.log('menyayem')
    } else {
      setShowMore(false);
    }
  }

  function handleClick() {
    setStartIndex(startIndex + sise);
    handleShowMore()
    console.log('click')
  }

  const moviesElements = movies.slice(0, showMore ? startIndex : movies.length).map((card) => (
    <MoviesCard
      showCard={showCard}
      isActiv={false}
      key={card._id}
      card={card}
    // onCardDelete={onCardDelete}
    // onCardLike={onCardLike}
    // onCardClick={onCardClick}
    />
  ))
  console.log('arr', startIndex, movies.length > startIndex + sise, movies.length, moviesElements.length)

  return (
    <section className="cards">
      <div className='cards__list'>
        {moviesElements}
      </div>
      <button onClick={handleClick} className={`cards__button-more ${showMore ? '' : 'disabled'} animation__button`}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;