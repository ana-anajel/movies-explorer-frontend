import React, { useState } from 'react';
import './Profile.css';
import '../Animation/Animation.css';
import { Link } from 'react-router-dom';

function Profile({ signOut }) {
  const [isEditProfile, setIsEditProfile] = useState(true);
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  function editProfileOn(e) {
    e.preventDefault();
    setIsEditProfile(false);
  }

  function handleNameProfile(e) {
    setName(e.target.value);
  }

  function handleEmailProfile(e) {
    setEmail(e.target.value);
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
                  onChange={handleEmailProfile}
                  disabled={isEditProfile}
                  type="email"
                  value={email}
                  placeholder='E-mail'
                />
              </label>
            </li>
          </ul>

          {isEditProfile ? (<button
            className='profile__button animation__link'
            type="submit"
            aria-label="Редактировать"
          >Редактировать</button>)
            :
            (<div className='profile__button-container'>
              <span className="profile__error-message popup__input-error-name">При обновлении профиля произошла ошибка.</span>
              <button
                className='profile__save-button animation__button'
                type="submit"
                aria-label="Сохранить"
              >Сохранить</button>
            </div>)}


        </form>

        {isEditProfile ? (<Link
          className='profile__button profile__logout-button animation__link'
          to='/signin'
          onClick={signOut}
        >Выйти из аккаунта</Link>
        ) : ('')}
      </div>

    </article >
  );
}

export default Profile;