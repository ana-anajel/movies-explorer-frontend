import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorSearch from '../ErrorSearch/ErrorSearch';

function Movies({ loading, nullRequest, error, addMovie, deleteMovie, dataSearch, movies, saveMovies }) {
  return (
    <div className="movies">
      <SearchForm
        typeSearch={'search'}
        loading={loading}
        dataSearchType={'dataSearch'}
        checkedType={'dataSearchChecked'}
        dataSearch={dataSearch}
      // nullInput={nullInput}
      />
      {loading && <Preloader />}
      {nullRequest && <ErrorSearch message={'Ничего не найдено.'} />}
      {/* {nullInput && <ErrorSearch message={'Введите ключевое слово.'} />} */}
      {error && <ErrorSearch message={'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'} />}
      {!loading && !error && !nullRequest && <MoviesCardList saveMovies={saveMovies} movies={movies} addMovie={addMovie} deleteMovie={deleteMovie} type={true} />}
    </div>
  );
}

export default Movies;