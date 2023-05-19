import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorSearch from '../ErrorSearch/ErrorSearch'

function SavedMovies({ dataSaveSearch, saveMovies, loading, nullRequest, error, deleteMovie }) {
  return (
    <div className="movies">
      <SearchForm
        dataSearch={dataSaveSearch}
        loading={loading}
        dataSearchType={'dataSaveSearch'}
        checkedType={'dataSearchSaveChecked'}
      />
      {loading && <Preloader />}
      {nullRequest && <ErrorSearch message={'Ничего не найдено.'} />}
      {error && <ErrorSearch message={'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'} />}
      {!loading && !error && !nullRequest && <MoviesCardList movies={saveMovies} type={false} deleteMovie={deleteMovie} />}
    </div>
  );
}

export default SavedMovies;