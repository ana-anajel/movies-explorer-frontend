import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorSearch from '../ErrorSearch/ErrorSearch';
import Footer from '../Footer/Footer';

function Movies({ loading, nullRequest, nullRsult, error, addMovie, deleteMovie, searchMovies, filteredMovies, theme, loggedIn }) {
  return (
    <>
      <Header theme={theme} loggedIn={loggedIn} />
      <div className="movies">
        <SearchForm
          typeSearch={'search'}
          loading={loading}
          searchType={'searchQuery'}
          checkboxType={'checkboxState'}

          searchMovies={searchMovies}
        />
        {loading && <Preloader />}
        {nullRequest && <ErrorSearch message={'Введите ключевое слово.'} />}
        {nullRsult && <ErrorSearch message={'Ничего не найдено.'} />}
        {error && <ErrorSearch message={'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'} />}
        {!loading && !error && !nullRequest && !nullRsult && <MoviesCardList filteredMovies={filteredMovies} addMovie={addMovie} deleteMovie={deleteMovie} type={true} />}
      </div>
      <Footer />
    </>
  );
}

export default Movies;