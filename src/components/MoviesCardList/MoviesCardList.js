import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import '../Animation/Animation.css';

function MoviesCardList({ movies, saveMovies, addMovie, deleteMovie, type }) {
  const [sise, setSise] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // console.log(movies);
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
    handleShowMore();
  }, [startIndex])

  function handleShowMore() {
    if (movies.length > startIndex + sise) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }

  function handleClick() {
    setStartIndex(startIndex + sise);
    handleShowMore()
  }
  console.log(movies[1])
  const moviesElements = movies.slice(0, showMore ? startIndex : movies.length).map((card) => (

    < MoviesCard
      saveMovies={saveMovies}

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