import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorSearch from '../ErrorSearch/ErrorSearch';

function Movies({ dataSearch, movies, loading, nullRequest, error, addMovie, deleteMovie, saveMovies }) {
  return (
    <div className="movies">
      <SearchForm
        dataSearch={dataSearch}
        loading={loading}
        dataSearchType={'dataSearch'}
        checkedType={'dataSearchChecked'}
      />
      {loading && <Preloader />}
      {nullRequest && <ErrorSearch message={'Ничего не найдено.'} />}
      {error && <ErrorSearch message={'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'} />}
      {!loading && !error && !nullRequest && <MoviesCardList movies={movies} saveMovies={saveMovies} addMovie={addMovie} deleteMovie={deleteMovie} type={true} />}
    </div>
  );
}

export default Movies;