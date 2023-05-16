import React, { useState } from 'react';
import './Profile.css';
import '../Animation/Animation.css';
import { Link } from 'react-router-dom';

function Profile({ signOut, currentUser, dataProfile }) {
  const [isEditProfile, setIsEditProfile] = useState(true);

  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessageName, setErrorMessageName] = useState('');

  const [isValid, setIsValid] = useState(false);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  function editProfile() {
    setIsEditProfile(false);
  }

  function handleInput(e, setErrorMessage, setValue) {
    setErrorMessage(e.target.validationMessage.split('.')[0])
    setIsValid(e.target.form.checkValidity());
    setValue(e.target.value);
  }

  function handleName(e) {
    handleInput(e, setErrorMessageName, setName);
  }

  function handleEmail(e) {
    handleInput(e, setErrorMessageEmail, setEmail);
  }

  function onSubmit(e) {
    e.preventDefault();
    setIsEditProfile(true);
    dataProfile({
      name: name,
      email: email
    });
  }

  return (
    <article className='profile'>
      <div className='profile__content'>

        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form
          onSubmit={onSubmit}
          noValidate
        >
          <ul className='profile__list'>

            <li className="profile__list-element">
              <label className="profile__label-container">
                <h3 className='profile__element'>Имя</h3>
                <input className='profile__element profile__input'
                  onChange={handleName}
                  disabled={isEditProfile}
                  type="text"
                  value={name}
                  id="name"
                  name="name"
                  minLength="2"
                  noValidate
                  placeholder='Имя профиля'
                  required
                />
              </label>
            </li>

            <li className="profile__list-element">
              <label className="profile__label-container">
                <h3 className='profile__element'>E-mail</h3>
                <input className='profile__element profile__input'
                  onChange={handleEmail}
                  disabled={isEditProfile}
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder='E-mail'
                  noValidate
                  required
                />
              </label>
            </li>
          </ul>

          {isEditProfile ? (<p
            className='profile__button animation__link'
            onClick={editProfile}
          >Редактировать</p>)
            :
            (<div className='profile__button-container'>
              <span className="profile__error-message popup__input-error-name">{errorMessageName || errorMessageEmail}</span>
              <button
                className={`profile__save-button ${isValid ? 'profile__save-button_activ' : ''} animation__button`}
                type="submit"
                disabled={!isValid}
                aria-label="Сохранить"
              >Сохранить</button>
            </div>)}


        </form>

        {isEditProfile ? (<p
          className='profile__button profile__logout-button animation__link'
          onClick={signOut}
        >Выйти из аккаунта</p>
        ) : ('')}
      </div>

    </article >
  );
}

export default Profile;