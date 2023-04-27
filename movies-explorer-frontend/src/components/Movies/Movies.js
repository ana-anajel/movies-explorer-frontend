import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies() {
  return (
    <div className="movies">
      <MoviesCardList />
    </div>
  );
}

export default Movies;