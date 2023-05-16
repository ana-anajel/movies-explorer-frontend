import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorSearch from '../ErrorSearch/ErrorSearch';

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <ErrorSearch />
      {/* <MoviesCardList /> */}
    </div>
  );
}

export default Movies;