import React, { useState } from 'react';
import './Profile.css';
import '../Animation/Animation.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [isEditProfile, setIsEditProfile] = useState(true);
  const [name, setName] = useState('Виталий');

  function editProfileOn(e) {
    e.preventDefault();
    setIsEditProfile(false);
  }

  function handleNameProfile(e) {
    setName(e.target.value);
  }

  function onLogout(e) {
    e.preventDefault();
    console.log('onLogout');
  }

  return (
    <article className='profile'>
      <div className='profile__content'>

        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form
          onSubmit={editProfileOn}
        >
          <ul className='profile__list'>

            <li className="profile__list-element">
              <label className="profile__label-container">
                <h3 className='profile__element'>Имя</h3>
                <input className='profile__element profile__input'
                  onChange={handleNameProfile}
                  disabled={isEditProfile}
                  type="text"
                  value={name}
                  placeholder='Имя профиля'
                  required
                />
              </label>
            </li>

            <li className="profile__list-element">
              <label className="profile__label-container">
                <h3 className='profile__element'>E-mail</h3>
                <input className='profile__element profile__input'
                  disabled={isEditProfile}
                  value='pochta@yandex.ru'
                  placeholder='E-mail'
                />
              </label>
            </li>
          </ul>

          <button
            className='profile__button animation__link'
            type="submit"
            aria-label="Кнопка редактировать"
          >Редактировать</button>

        </form>

        <Link
          className='profile__button profile__logout animation__link'
          onClick={onLogout}
          to='/signin'
        >Выйти из аккаунта</Link>
      </div>

    </article >
  );
}

export default Profile;