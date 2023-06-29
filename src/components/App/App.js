import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { auth } from '../../utils/MainApi';
import { api } from '../../utils/MoviesApi';

import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';

import { FILM_DURATION } from '../../constants/constants'

function App() {
  const navigate = useNavigate();
  //данные api
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([]);

  //данные локалсторедж
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSaveMovies, setFilteredSaveMovies] = useState([]);

  //Авторизован пользователь или нет
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('loggedIn')));

  //состояния
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nullRequest, setNullRequest] = useState(false);
  const [nullRsult, setNullRsult] = useState(false);

  const [saveloading, setSaveLoading] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [saveNullRequest, setSaveNullRequest] = useState(false);
  const [saveNullRsult, setSaveNullRsult] = useState(false);

  // сообщения
  const [errorCreateUser, setErrorCreateUser] = useState('');
  const [errorAuthorization, setErrorAuthorization] = useState('');
  const [errorUpdateUser, setErrorUpdateUser] = useState('');
  const [messageOk, setMessageOk] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageOk('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [messageOk]);

  // фильтры для формы поиска
  function filterMovies(search, arr) {
    return arr.filter((item) => {
      return item.nameEN.toLowerCase().includes(search.toLowerCase()) ||
        item.nameRU.toLowerCase().includes(search.toLowerCase())
    })
  }

  function filterTime(arr) {
    return arr.filter((item) => {
      return item.duration < FILM_DURATION;
    })
  }

  // сбросить состояние ошибки к значению по умолчанию
  function resetError() {
    setErrorCreateUser('');
    setErrorAuthorization('');
    setErrorUpdateUser('')
  }

  useEffect(() => {
    if (loggedIn) {
      const arrMovies = JSON.parse(localStorage.getItem('moviesList')) || [];
      const arrSaveMovies = JSON.parse(localStorage.getItem('saveMoviesList')) || [];
      if (arrMovies.length === 0) {
        Promise.all([api.getMovies(), auth.getSaveMovies()])
          .then(([dataMovies, dataSaveMovies]) => {
            localStorage.setItem('moviesList', JSON.stringify(dataMovies));
            localStorage.setItem('saveMoviesList', JSON.stringify(dataSaveMovies));
            setMovies(JSON.parse(localStorage.getItem('moviesList')));
            setSaveMovies(JSON.parse(localStorage.getItem('saveMoviesList')));
          })
          .catch((err) => console.log(err, 'Ошибка при получении данных.'));
      } else {
        setMovies(arrMovies);
        setSaveMovies(arrSaveMovies);
      }
    }
  }, [loggedIn]);

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery') || '';
    if (searchQuery) {
      searchMovies();
    }
  }, [movies]);

  //фильтрация
  const searchMovies = async () => {
    setLoading(true);
    setError(false);
    setNullRequest(false);
    setNullRsult(false);

    try {
      const checked = JSON.parse(localStorage.getItem('checkboxState'));
      const searchQuery = localStorage.getItem('searchQuery');

      if (!searchQuery) {
        setTimeout(() => {
          setLoading(false);
          setNullRequest(true);
        }, 1000);
        return;
      }
      let dataFilteredMovies = [];
      if (checked && Boolean(searchQuery)) {
        dataFilteredMovies = await filterMovies(searchQuery, filterTime(movies));
      } else if (searchQuery) {
        dataFilteredMovies = await filterMovies(searchQuery, movies);
      }
      setFilteredMovies(dataFilteredMovies);

      if (dataFilteredMovies.length === 0) {
        setNullRsult(true);
      }
      setLoading(false);
      return
    } catch (e) {
      console.log(e)
      setError(true);
    }
  }

  const searchSavedMovies = () => {
    setSaveLoading(true);
    setSaveError(false);
    setSaveNullRequest(false);
    setSaveNullRsult(false)

    try {
      const checked = JSON.parse(localStorage.getItem('saveCheckboxState'));
      const searchQuery = localStorage.getItem('saveSearchQuery');

      if (!searchQuery && !checked) {
        setTimeout(() => {
          setSaveLoading(false);
          setSaveNullRequest(true);
        }, 1000);
        return;
      }

      let dataFilteredMovies = [];
      if (checked && Boolean(searchQuery)) {
        dataFilteredMovies = filterMovies(searchQuery, filterTime(saveMovies));
      } else if (searchQuery) {
        dataFilteredMovies = filterMovies(searchQuery, saveMovies);
      } else if (checked) {
        dataFilteredMovies = filterTime(saveMovies);
      }
      setFilteredSaveMovies(dataFilteredMovies);

      if (dataFilteredMovies.length === 0) {
        setSaveNullRsult(true);
      }

      setSaveLoading(false);
      return;

    } catch (err) {
      setSaveLoading(false);
      setSaveError(true);
      console.log(err, 'ошибка при поиске в сохраненках')
    }
  }

  function addMovie(data) {
    auth.createMovie(data)
      .then((newMovie) => {
        const moviesList = JSON.parse(localStorage.getItem('saveMoviesList'));
        localStorage.setItem('saveMoviesList', JSON.stringify([newMovie, ...moviesList]));
      })
      .catch((err) => console.log(err, 'не удалось создать карточку'));
  }

  function deleteMovie(card) {
    auth.deleteMovie(card._id)
      .then(() => {
        const del = JSON.parse(localStorage.getItem('saveMoviesList'));
        const updateSaveMovies = del.filter((i) => i._id !== card._id);
        const filteredUpdateSaveMovies = filteredSaveMovies.filter((i) => i._id !== card._id);
        setSaveMovies(updateSaveMovies);
        setFilteredSaveMovies(filteredUpdateSaveMovies);
        localStorage.setItem('saveMoviesList', JSON.stringify(updateSaveMovies));
      })
      .catch((err) => console.log(err));
  }

  function handleCreateUser({ name, email, password }) {
    auth.register(name, email, password)
      .then(() => {
        handleAuthorization({ email, password });
      })
      .catch((err) => {
        setErrorCreateUser(err);
      })
  }

  function handleAuthorization({ email, password }) {
    auth.authorize(email, password)
      .then(() => {
        setLoggedIn(true);
      })
      // .then(() => navigate('/movies'))
      .catch((err) => {
        setErrorAuthorization(err);
      });
  }

  function handleUpdateUser({ name, email }) {
    auth.editDataUser(email, name)
      .then(res => {
        setMessageOk('Данные профиля успешно изменены.');
        setCurrentUser({ name: res.name, email: res.email });
      })
      .catch((err) => {
        setErrorUpdateUser(err);
      });
  }

  function tokenCheck() {
    auth.checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser({ name: res.name, email: res.email, id: res._id })
          setLoggedIn(true);
          localStorage.setItem('loggedIn', res._id)
        }
      })
      .catch((err) => console.log(err, "Не удалось авторизировать пользователя."));
  }

  useEffect(() => {
    tokenCheck();
  }, [loggedIn])

  function signOut() {
    auth.signOut()
      .then(() => {
        setSaveMovies([]);
        setMovies([]);
        setCurrentUser({})
        localStorage.removeItem('moviesList');
        localStorage.removeItem('saveMoviesList');

        localStorage.removeItem('searchQuery');
        localStorage.removeItem('checkboxState');

        localStorage.removeItem('saveSearchQuery');
        localStorage.removeItem('saveCheckboxState');

        localStorage.removeItem('path');
        localStorage.removeItem('loggedIn');

        setLoggedIn(false)
        navigate('/');
      })
      .catch((err) => console.log('Ошибка при выходе', err));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signup" element={!loggedIn ? <Register
            errorCreateUser={errorCreateUser}
            onCreateUser={handleCreateUser}
            resetError={resetError}
          /> : <Navigate to="/movies" replace />} />

          <Route path="/signin" element={!loggedIn ? <Login
            onLogin={handleAuthorization}
            errorAuthorization={errorAuthorization}
            resetError={resetError}
          /> : <Navigate to="/movies" replace />} />

          <Route path="/" element={(
            <>
              <Header theme={true} loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          )} />

          <Route
            path='/movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                theme={false}
                component={Movies}
                filteredMovies={filteredMovies}
                searchMovies={searchMovies}
                loading={loading}
                error={error}
                nullRequest={nullRequest}
                nullRsult={nullRsult}
                addMovie={addMovie}
                deleteMovie={deleteMovie}
              />
            } />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                theme={false}
                component={SavedMovies}
                movies={filteredSaveMovies}
                setFilteredSaveMovies={setFilteredSaveMovies}
                filteredMovies={filteredSaveMovies}
                searchMovies={searchSavedMovies}
                loading={saveloading}
                error={saveError}
                nullRequest={saveNullRequest}
                nullRsult={saveNullRsult}
                deleteMovie={deleteMovie}
              />
            } />

          <Route
            path='/profile'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                theme={false}
                component={Profile}
                signOut={signOut}
                resetError={resetError}
                errorUpdateUser={errorUpdateUser}
                handleUpdateUser={handleUpdateUser}
                messageOk={messageOk}
              />
            } />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
