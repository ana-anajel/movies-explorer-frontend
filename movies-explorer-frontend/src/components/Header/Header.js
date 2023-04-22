//import logo from '../../images/logo.svg';
import React from 'react';
import './Header.css';

function Header({ handleClick }) {
  return (
    <header className="Header">
      <h1>HHHHHH</h1>
      <button className='button button_up' onClick={handleClick}>
        Регистрация
      </button>
      <button className='button button_login' onClick={handleClick}>
        Войти
      </button>
    </header>
  );
}

export default Header;