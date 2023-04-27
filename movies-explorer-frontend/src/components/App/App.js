import React from 'react';
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
// import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
