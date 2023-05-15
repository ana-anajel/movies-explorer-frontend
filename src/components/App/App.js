import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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

  function handleCreateUser({ name, email, password }) {
    auth.register(name, email, password)
      .then((res) => {
        console.log(res)
        // setRequestStatus(true);
        navigate('/signin');
      })
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
      .then((res) => {
        console.log(res)
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        navigate('/');
      })
      .catch((err) => console.log(err));
  }

  function tokenCheck() {
    // Проверяем наличие токена
    // const token = localStorage.getItem('token');
    auth
      .checkToken()
      .then((res) => {
        console.log(res);
        if (res) {
          // авторизуем пользователя
          setLoggedIn(true);
          navigate('/');
        }
      })
      .catch((err) => console.log(err, "tokenCheck"));
  }

  // useEffect(() => {
  //   tokenCheck();
  // }, [navigate])

  function signOut() {
    auth.signOut().then((res) => {
      console.log(res)
    })
      .catch((err) => console.log(err));
    localStorage.removeItem('token');
    localStorage.clear();
    console.log(localStorage.removeItem('token'))
    navigate('/signin');
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
            <Header theme={false} />
            <Movies />
            <Footer />
          </>
          : <Navigate to="/signin" replace />} />

        <Route path='/saved-movies' element={loggedIn ?
          <>
            <Header theme={false} />
            <SavedMovies />
            <Footer />
          </>
          : <Navigate to="/signin" replace />} />

        <Route path='/profile' element={loggedIn ?
          <>
            <Header theme={false} />
            <Profile signOut={signOut} />
          </>
          : <Navigate to="/signin" replace />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div >
  );
}

export default App;
