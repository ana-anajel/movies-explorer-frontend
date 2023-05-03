import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import '../Animation/Animation.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">

      <Link className='animation' to='/'>
        <img className='header__logo' alt="Логотип сайта. Черный круг." src={logo} />
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;