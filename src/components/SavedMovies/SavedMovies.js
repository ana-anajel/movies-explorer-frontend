import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesSaveCardList from '../MoviesSaveCardList/MoviesSaveCardList';
import Preloader from '../Preloader/Preloader';
import ErrorSearch from '../ErrorSearch/ErrorSearch'

function SavedMovies({ movies, dataSearch, loading, nullRequest, nullRsult, error, deleteMovie }) {
  return (
    <div className="movies">
      <SearchForm
        typeSearch={'saveSearch'}
        loading={loading}
        dataSearchType={'dataSaveSearch'}
        checkedType={'dataSearchSaveChecked'}
        dataSearch={dataSearch}
      />
      {loading && <Preloader />}
      {nullRequest && <ErrorSearch message={'Введите ключевое слово.'} />}
      {nullRsult && <ErrorSearch message={'Ничего не найдено.'} />}
      {error && <ErrorSearch message={'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'} />}
      {!loading && !error && !nullRequest && !nullRsult && <MoviesSaveCardList movies={movies} type={false} deleteMovie={deleteMovie} />}
    </div>
  );
}

export default SavedMovies;