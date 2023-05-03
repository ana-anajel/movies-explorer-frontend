import React from 'react';
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={(
          <>
            <Header />
            <Main />
            <Footer />
          </>
        )} />

        <Route path='/movies' element={(
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        )} />

        <Route path='/users/me' element={(
          <>
            <Header />
            <Profile />
          </>
        )} />

      </Routes>
    </div >
  );
}

export default App;
