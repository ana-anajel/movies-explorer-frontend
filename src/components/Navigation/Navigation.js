import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Avatar from '../../images/avatar.svg'
import Burger from '../Burger/Burger';
import './Navigation.css';
import '../Animation/Animation.css';

function Navigation({ handleBurgerClick }) {
  return (
    <>
      <Burger handleBurgerClick={handleBurgerClick} />
      <span className='menu__blur' />
      <nav className='menu'>
        <span>
          <NavLink to='/' className='menu__link menu__link-span animation' activeClassName="active">Главная</NavLink>
        </span>
        <ul className='menu__list menu__list-movies'>
          <li className='menu__link-movies'><NavLink className='menu__link menu__text-movies animation' activeClassName="active" to='/movies'>Фильмы</NavLink></li>
          <li className='menu__link-movies'><NavLink className='menu__link menu__text-save-movies animation' activeClassName="active" to='/saved-movies'>Сохранённые фильмы</NavLink></li>
        </ul>
        <ul className='menu__list'>
          <li><NavLink className='menu__link menu__text-profile animation' activeClassName="active" to='/profile'>Аккаунт</NavLink></li>
          <li className='menu__avatar-container'><Link className='menu__link animation' to='/profile'><img className='menu__avatar' alt="Иконка аватара. Силуэт портрета человечика." src={Avatar} /></Link></li>
        </ul>
      </nav >
    </>
  );
}

export default Navigation;