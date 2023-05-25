import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

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
  const [loggedIn, setLoggedIn] = useState(false);

  //состояния
  const [request, setRequest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nullRequest, setNullRequest] = useState(false);
  const [nullRsult, setNullRsult] = useState(false);

  const [saveRequest, setSaveRequest] = useState(false);
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
      return item.duration < 40;
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
      const filterText = localStorage.getItem('dataSearch') || '';
      if (filterText) {
        dataSearch()
      }
    }
  }, [loggedIn]);

  const dataSearch = async () => {
    setError(false);
    setNullRequest(false);
    setNullRsult(false);
    setLoading(true);
    try {
      const checked = JSON.parse(localStorage.getItem('dataSearchChecked'));
      const dataSearch = localStorage.getItem('dataSearch');

      if (!dataSearch) {
        setTimeout(() => {
          setLoading(false);
          setNullRequest(true);
        }, 1000);
        return;
      }

      let dataFilteredMovies = [];
      if (checked && Boolean(dataSearch)) {
        dataFilteredMovies = await filterMovies(dataSearch, filterTime(movies));
      } else if (dataSearch) {
        dataFilteredMovies = await filterMovies(dataSearch, movies);
      }
      setFilteredMovies(dataFilteredMovies);
      setLoading(false);
      return;

    } catch (e) {
      console.log(e)
      setError(true);
    }
  }

  useEffect(() => {
    if (request) {
      if (filteredMovies.length === 0) {
        setLoading(false);
        setNullRsult(true);
      }
    }
  }, [filteredMovies]);

  const dataSaveSearch = () => {
    setSaveError(false);
    setSaveNullRequest(false);
    setSaveRequest(true);
    setSaveLoading(true);
    setSaveNullRsult(false)

    try {
      const checked = JSON.parse(localStorage.getItem('dataSearchSaveChecked'));
      const dataSearch = localStorage.getItem('dataSaveSearch');

      if (!dataSearch) {
        setTimeout(() => {
          setSaveLoading(false);
          setSaveNullRequest(true);
        }, 1000);
        return;
      }

      let dataFilteredMovies = [];
      if (checked && Boolean(dataSearch)) {
        dataFilteredMovies = filterMovies(dataSearch, filterTime(saveMovies));
      } else if (dataSearch) {
        dataFilteredMovies = filterMovies(dataSearch, saveMovies);
      }
      setFilteredSaveMovies(dataFilteredMovies);
      setSaveLoading(false);
      return;

    } catch (err) {
      setSaveLoading(false);
      setSaveError(true);
      console.log(err, 'ошибка при поиске в сохраненках')
    }
  }

  useEffect(() => {
    if (saveRequest) {
      setSaveNullRequest(filteredSaveMovies.length === 0)
      setSaveLoading(false);
      setSaveNullRsult(true);
    }
  }, [filteredSaveMovies]);

  function addMovie(data) {

    auth.createMovie(data)
      .then((newMovie) => {
        setSaveMovies([newMovie, ...saveMovies]);
        localStorage.setItem('saveMoviesList', JSON.stringify(saveMovies));
      })
      .catch((err) => console.log(err, 'не удалось создать карточку'));
    console.log(saveMovies);
  }

  function deleteMovie(card) {
    auth.deleteMovie(card._id)
      .then(() => {
        console.log(card._id)
        const updateSaveMovies = saveMovies.filter((i) => i._id !== card._id);
        setSaveMovies(updateSaveMovies);
        localStorage.setItem('saveMoviesList', JSON.stringify(saveMovies));
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

        localStorage.removeItem('arrMovies');
        localStorage.removeItem('arrSaveMovies');
        localStorage.removeItem('dataSearchChecked');
        localStorage.removeItem('dataSearch')
        localStorage.removeItem('dataSaveSearch');
        localStorage.removeItem('dataSaveSearchChecked');
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

          <Route path='/movies' element={loggedIn ?
            <>
              <Header theme={false} loggedIn={loggedIn} />
              <Movies
                saveMovies={saveMovies}
                movies={filteredMovies}
                request={request}

                dataSearch={dataSearch}
                loading={loading}
                error={error}
                nullRequest={nullRequest}
                nullRsult={nullRsult}
                addMovie={addMovie}
                deleteMovie={deleteMovie} />
              <Footer />
            </>
            : <Navigate to="/signin" replace />} />

          <Route path='/saved-movies' element={loggedIn ?
            <>
              <Header theme={false} loggedIn={loggedIn} />
              <SavedMovies
                movies={saveMovies}

                dataSearch={dataSaveSearch}
                deleteMovie={deleteMovie}
                loading={saveloading}
                error={saveError}
                nullRequest={saveNullRequest}
              />
              <Footer />
            </>
            : <Navigate to="/signin" replace />} />

          <Route path='/profile' element={loggedIn ?
            <>
              <Header theme={false} loggedIn={loggedIn} />
              <Profile signOut={signOut}
                resetError={resetError}
                errorUpdateUser={errorUpdateUser}
                handleUpdateUser={handleUpdateUser}
                messageOk={messageOk}
              />
            </>
            : <Navigate to="/signin" replace />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
