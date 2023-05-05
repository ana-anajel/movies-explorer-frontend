import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import '../Animation/Animation.css';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header({ theme }) {
  //временное решение. true=> шапка для зареганого пользователя false => шапка с кнопками входа
  const autorsation = true;
  return (
    // open, при добавлении класса открывается бургер меню
    <header className={`header ${theme ? 'header__theme' : ''}`}>

      <Link className='animation' to='/'>
        <img className='header__logo' alt="Логотип сайта. Черный круг." src={logo} />
      </Link>

      {autorsation ? <Navigation /> : <NavTab />}

    </header>
  );
}

export default Header;