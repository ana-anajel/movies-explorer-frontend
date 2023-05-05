import React from 'react';
import Avatar from '../../images/avatar.svg'
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';
import './Navigation.css';
import '../Animation/Animation.css';

function Navigation() {

  return (
    <>
      <Burger />
      <span className='menu__blur' />
      <nav className='menu'>
        <span>
          <Link to='/' className='menu__link menu__link-span animation'>Главная</Link>
        </span>
        <ul className='menu__list menu__list-movies'>
          <li className='menu__link-movies'><Link className='menu__link menu__link_active menu__text-movies animation' to='/movies'>Фильмы</Link></li>
          <li className='menu__link-movies'><Link className='menu__link menu__text-save-movies animation' to='/saved-movies'>Сохранённые фильмы</Link></li>
        </ul>
        <ul className='menu__list'>
          <li><Link className='menu__link menu__text-profile animation' to='/profile'>Аккаунт</Link></li>
          <li className='menu__avatar-container'><Link className='menu__link animation' to='/profile'><img className='menu__avatar' alt="Иконка аватара. Силуэт портрета человечика." src={Avatar} /></Link></li>
        </ul>
      </nav >
    </>
  );
}

export default Navigation;