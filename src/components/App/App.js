import React from 'react';
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';

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

  function handleCreateUser(data) {
    console.log('Успех', data)
    // auth.register(data.email, data.password)
    //   .then(() => {
    //     setRequestStatus(true);
    //     history.push('/signin');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setRequestStatus(false);
    //   })
    //   .finally(() => {
    //     setIsStatusPopupOpen(true);
    //   });
  }

  function handleLogin(data) {
    console.log('Вошли', data)
    // auth.authorize(data.email, data.password)
    //   .then((res) => {
    //     localStorage.setItem('token', res.token);
    //     localStorage.setItem('email', data.email);
    //     auth.setToken(res.token);
    //     api.setToken(res.token);
    //     setEmail(data.email);
    //     setLoggedIn(true);
    //     history.push('/');
    //   })
    //   .catch((err) => console.log(err, 'handleAuthorization'));
  }


  return (
    <div className="page">
      <Routes>
        <Route path="/signup" element={<Register
          onCreateUser={handleCreateUser}
        />} />
        <Route path="/signin" element={<Login
          onLogin={handleLogin}
        />} />

        <Route path="/" element={(
          <>
            <Header theme={true} />
            <Main />
            <Footer />
          </>
        )} />

        <Route path='/movies' element={(
          <>
            <Header theme={false} />
            <Movies />
            <Footer />
          </>
        )} />

        <Route path='/saved-movies' element={(
          <>
            <Header theme={false} />
            <SavedMovies />
            <Footer />
          </>
        )} />

        <Route path='/profile' element={(
          <>
            <Header theme={false} />
            <Profile />
          </>
        )} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div >
  );
}

export default App;
