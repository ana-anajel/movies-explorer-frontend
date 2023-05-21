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

  //Авторизован пользователь или нет
  const [loggedIn, setLoggedIn] = useState(false);

  //состояния
  const [request, setRequest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nullRequest, setNullRequest] = useState(false);

  const [saveRequest, setSaveRequest] = useState(false);
  const [saveloading, setSaveLoading] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const [saveNullRequest, setSaveNullRequest] = useState(false);

  const [errorCreateUser, setErrorCreateUser] = useState('');

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
  }

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem('arrMovies'));
    const saveResults = JSON.parse(localStorage.getItem('arrSaveMovies'));
    if (results && saveResults) {
      dataSearch();
      dataSaveSearch();
    }
  }, []);

  const dataSearch = () => {
    setLoading(true);
    setError(false);
    setNullRequest(false);
    setRequest(true);

    api.getMovies()
      .then((res) => {
        if (JSON.parse(localStorage.getItem('dataSearchChecked'))) {
          const resultsMovies = filterMovies(localStorage.getItem('dataSearch'), filterTime(res));
          setMovies(resultsMovies);
          localStorage.setItem('arrMovies', JSON.stringify(resultsMovies));
        } else {
          const resultsMovies = filterMovies(localStorage.getItem('dataSearch'), res);
          setMovies(resultsMovies);
          localStorage.setItem('arrMovies', JSON.stringify(resultsMovies));
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err, 'ошибка при поиске')
      })
  }

  const dataSaveSearch = () => {
    setSaveLoading(true);
    setSaveError(false);
    setSaveNullRequest(false);
    setSaveRequest(true);

    auth.getSaveMovies()
      .then((res) => {
        if (JSON.parse(localStorage.getItem('dataSearchSaveChecked'))) {
          const resultsMovies = filterMovies(localStorage.getItem('dataSaveSearch'), filterTime(res));
          setSaveMovies(resultsMovies);
          localStorage.setItem('arrSaveMovies', JSON.stringify(resultsMovies));
        } else {
          const resultsMovies = filterMovies(localStorage.getItem('dataSaveSearch'), res);
          setSaveMovies(resultsMovies);
          localStorage.setItem('arrSaveMovies', JSON.stringify(resultsMovies));
        }
      })
      .catch((err) => {
        setLoading(false);
        setSaveError(true);
        console.log(err, 'ошибка при поиске в сохраненках')
      })
  }

  function addMovie(data) {
    auth.createMovie(data)
      .then((newMovie) => {
        setSaveMovies([newMovie, ...saveMovies]);
      })
      .catch((err) => console.log(err, 'не удалось создать карточку'));
  }

  function deleteMovie(card) {
    auth.deleteMovie(card._id)
      .then(() => {
        const updateSaveMovies = saveMovies.filter((i) => i._id !== card._id);
        setSaveMovies(updateSaveMovies);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (request) {
      setNullRequest(movies.length === 0);
      setRequest(false);
    }
    setLoading(false);
  }, [movies]);

  useEffect(() => {
    if (saveRequest) {
      setSaveNullRequest(movies.length === 0);
      setSaveRequest(false);
    }
    setSaveLoading(false);
  }, [saveMovies]);

  function handleCreateUser({ name, email, password }) {
    auth.register(name, email, password)
      .then(() => {
        handleAuthorization({ email, password });
      })
      .catch((err) => {
        setErrorCreateUser(err);
      })
  }

  const [errorAuthorization, setErrorAuthorization] = useState('');

  function handleAuthorization({ email, password }) {
    setErrorAuthorization('');
    auth.authorize(email, password)
      .then((res) => {
        // console.log(res)
        setLoggedIn(true);
      })
      .then(() => navigate('/movies'))
      .catch((err) => {
        setErrorAuthorization(err);
      });
  }

  function handleUpdateUser({ name, email }) {
    auth.editDataUser(email, name)
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck() {
    auth.checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser({ name: res.name, email: res.email, id: res._id })
          setLoggedIn(true);
          navigate('/movies');
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
        setLoggedIn(false)
        navigate('/');
      })
      .catch((err) => console.log('Ошибка при выходе', err));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signup" element={<Register
            errorCreateUser={errorCreateUser}
            onCreateUser={handleCreateUser}
            resetError={resetError}
          />} />
          <Route path="/signin" element={<Login
            onLogin={handleAuthorization}
            errorAuthorization={errorAuthorization}
            resetError={resetError}
          />} />

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
                dataSearch={dataSearch}
                movies={movies}
                saveMovies={saveMovies}
                loading={loading}
                error={error}
                nullRequest={nullRequest}
                addMovie={addMovie}
                deleteMovie={deleteMovie} />
              <Footer />
            </>
            : <Navigate to="/signin" replace />} />

          <Route path='/saved-movies' element={loggedIn ?
            <>
              <Header theme={false} loggedIn={loggedIn} />
              <SavedMovies
                dataSaveSearch={dataSaveSearch}
                saveMovies={saveMovies}
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
              <Profile signOut={signOut} dataProfile={handleUpdateUser} />
            </>
            : <Navigate to="/signin" replace />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
