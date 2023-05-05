import React from 'react';
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
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
  return (
    <div className="page">
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />

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
