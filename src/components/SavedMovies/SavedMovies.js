import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ deleteMovie, type }) {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList type={false} deleteMovie={deleteMovie} />
    </div>
  );
}

export default SavedMovies;