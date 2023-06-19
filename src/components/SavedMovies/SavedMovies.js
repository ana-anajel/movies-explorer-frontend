import React, { useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesSaveCardList from '../MoviesSaveCardList/MoviesSaveCardList';
import Preloader from '../Preloader/Preloader';
import ErrorSearch from '../ErrorSearch/ErrorSearch'

function SavedMovies({ filteredMovies, setFilteredSaveMovies, searchMovies, loading, nullRequest, nullRsult, error, deleteMovie }) {
  return (
    <div className="movies">
      <SearchForm
        typeSearch={'saveSearch'}
        loading={loading}
        searchType={'saveSearchQuery'}
        checkboxType={'saveCheckboxState'}
        searchMovies={searchMovies}
        setFilteredSaveMovies={setFilteredSaveMovies}
      />
      {loading && <Preloader />}
      {nullRequest && <ErrorSearch message={'Введите ключевое слово.'} />}
      {nullRsult && <ErrorSearch message={'Ничего не найдено.'} />}
      {error && <ErrorSearch message={'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'} />}
      {!loading && !error && !nullRequest && !nullRsult && <MoviesSaveCardList filteredMovies={filteredMovies} type={false} deleteMovie={deleteMovie} />}
    </div>
  );
}

export default SavedMovies;