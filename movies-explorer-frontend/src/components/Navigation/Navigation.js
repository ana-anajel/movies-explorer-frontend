import React from 'react';
import Avatar from '../../images/avatar.png'
import { Link } from 'react-router-dom';
import './Navigation.css';
import '../Animation/Animation.css';

function Navigation() {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li>
          <Link className='menu__link menu__link-movies animation' to='/movies'>
            Фильмы
          </Link>
        </li>

        <li>
          <Link className='menu__link menu__link-save-movies animation' to='/saved-movies'>
            Сохранённые фильмы
          </Link>
        </li>
      </ul>

      <ul className='menu__list'>
        <li>
          <Link className='menu__link menu__link-account animation' to='/profile'>
            Аккаунт
          </Link>
        </li>

        <li className='menu__avatar-container animation'>
          <Link className='animation' to='/profile'>
            <img className='menu__avatar' alt="Иконка аватара. Силуэт портрета человечика." src={Avatar} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;