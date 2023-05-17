import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorSearch from '../ErrorSearch/ErrorSearch';

function Movies({ dataSearch, movies, loading, nullRequest, error, request }) {
  // console.log({
  //   'загрузка?': loading,
  //   'movies?': nullRequest, movies,
  //   'ошибка?': error,
  //   'запрос?': request
  // })

  return (
    <div className="movies">
      <SearchForm dataSearch={dataSearch} />
      {request &&
        <>
          {loading && <Preloader />}
          {!loading && !error && !nullRequest && <MoviesCardList movies={movies} />}
          {error && <ErrorSearch message={'При запросе произошла ошибка.'} />}
          {nullRequest && <ErrorSearch message={'Ничего не найдено.'} />}
        </>
      }
    </div>
  );
}

export default Movies;