import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import '../Animation/Animation.css';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header({ theme }) {
  //временное решение
  const autorsation = false;
  return (
    // open
    <header className={`header ${theme ? 'header__theme' : ''}`}>

      <Link className='animation' to='/'>
        <img className='header__logo' alt="Логотип сайта. Черный круг." src={logo} />
      </Link>

      {autorsation ? <Navigation /> : <NavTab />}

    </header>
  );
}

export default Header;