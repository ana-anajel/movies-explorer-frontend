import React from 'react';
import logo from '../../images/logo.png';
// import { Link } from 'react-router-dom';
import './Header.css';

function Header({ handleClick }) {
  return (
    <header className="header">
      <img className='header__logo' alt="Логотип сайта. Черный круг." src={logo} />
      <ul className='header__list'>
        <li className='header__element'><a href='https://ya.ru/' className='header__link header__link_type_up'>Регистрация</a></li>
        <li className='header__element header__element_type_in'><a href='https://ya.ru/' className='header__link header__link_type_in'>Войти</a></li>
      </ul>
    </header>
  );
}

export default Header;