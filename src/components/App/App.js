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

  const dataSearch = ({ search, isChecked }) => {
    setLoading(true);
    setError(false);
    setNullRequest(false);
    setRequest(false);
    api.getMovies()
      .then((res) => {
        if (isChecked) {
          setMovies(filterMovies(search, filterTime(res)));
        } else {
          setMovies(filterMovies(search, res));
        }
      })
      .then(() => {
        setNullRequest(movies.length === 0);
      })
      .catch((err) => {
        setError(true);
        console.log(err, 'ошибка при поиске')
      })
      .finally(() => {
        setLoading(false);
        setRequest(true);
      })
  }

  const dataSaveSearch = ({ search, isChecked }) => {
    setLoading(true);
    setError(false);
    setNullRequest(false);
    setRequest(false);

    auth.getSaveMovies()
      .then((res) => {
        if (isChecked) {
          setSaveMovies(filterMovies(search, filterTime(res)));
        } else {
          setSaveMovies(filterMovies(search, res));
        }
      })
      .then(() => {
        setNullRequest(saveMovies.length === 0);
      })
      .catch((err) => {
        setError(true);
        console.log(err, 'ошибка при поиске в сохраненках')
      })
      .finally(() => {
        setLoading(false);
        setRequest(true);
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

  // useEffect(() => {
  //   console.log(saveMovies);
  // }, [saveMovies]); // коллбэк useEffect вызовется после обновления saveMovies

  function handleCreateUser({ name, email, password }) {
    auth.register(name, email, password)
      .then((res) => {
        // setRequestStatus(true);
        handleAuthorization({ email, password });
      })
      .then(() => navigate('/movies'))
      .catch((err) => {
        console.log(err);
        // setRequestStatus(false);
      })
      .finally(() => {
        // setIsStatusPopupOpen(true);
      });
  }

  function handleAuthorization({ email, password }) {
    auth.authorize(email, password)
      .then(() => {
        setLoggedIn(true);
      })
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  }

  function handleUpdateUser({ name, email }) {
    console.log(name, email)
    auth.editDataUser(email, name)
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email });
      })
      .catch((err) => console.log(err));
  }

  function tokenCheck() {
    // Проверяем наличие куки, делаем запрос
    auth.checkToken()
      .then((res) => {
        if (res) {
          // авторизуем пользователя
          setCurrentUser({ name: res.name, email: res.email, id: res._id })
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => console.log(err, "неавторизирован"));
  }

  useEffect(() => {
    tokenCheck();
  }, [loggedIn])

  function signOut() {
    auth.signOut()
      .then((res) => {
        console.log(res)
        // setLoggedIn(false)
        // navigate('/');
      })
      .catch((err) => console.log('ошибка при выходе', err));
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signup" element={<Register
            onCreateUser={handleCreateUser}
          />} />
          <Route path="/signin" element={<Login
            onLogin={handleAuthorization}
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

                loading={loading}
                error={error}
                nullRequest={nullRequest}
              />
              <Footer />
            </>
            : <Navigate to="/signin" replace />} />

          <Route path='/profile' element={loggedIn ?
            <>
              <Header theme={false} loggedIn={loggedIn} />
              <Profile signOut={signOut} currentUser={currentUser} dataProfile={handleUpdateUser} />
            </>
            : <Navigate to="/signin" replace />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
