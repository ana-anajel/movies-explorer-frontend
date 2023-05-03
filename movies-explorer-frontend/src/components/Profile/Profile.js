import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className='profile'>
      <div className='profile__content'>

        <h2 className='profile__title'>Привет, Виталий!</h2>

        <ul className='profile__list'>
          <li className='profile__list-element'>
            <p className='profile__element'>Имя</p>
            <p className='profile__element'>Виталий</p>
          </li>

          <li className='profile__list-element'>
            <p className='profile__element'>E-mail</p>
            <p className='profile__element'>pochta@yandex.ru</p>
          </li>
        </ul>

        <button className='profile__button'>Редактировать</button>
        <button className='profile__button'>Выйти из аккаунта</button>

      </div>

    </div>
  );
}

export default Profile;