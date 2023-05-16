import React, { useState, useEffect } from 'react';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

import { auth } from '../../utils/MainApi';
// import { api } from '../../utils/MoviesApi';

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

  //Авторизован пользователь или нет
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  function handleCreateUser({ name, email, password }) {
    auth.register(name, email, password)
      .then((res) => {
        console.log('зареган', res)
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
        console.log('вошел, токен сохранен')
        setLoggedIn(true);
      })
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  }

  function handleUpdateUser({ name, email }) {
    console.log(name, email)
    auth.editDataUser(email, name)
      .then(res => {
        console.log(res)
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
          setCurrentUser({ name: res.name, email: res.email })
          setLoggedIn(true);
          // navigate('/');
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
            <Movies />
            <Footer />
          </>
          : <Navigate to="/signin" replace />} />

        <Route path='/saved-movies' element={loggedIn ?
          <>
            <Header theme={false} loggedIn={loggedIn} />
            <SavedMovies />
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
    </div >
  );
}

export default App;
