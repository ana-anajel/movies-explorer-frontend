import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import './Profile.css';
import '../Animation/Animation.css';

function Profile({ messageOk, signOut, resetError, errorUpdateUser, handleUpdateUser, theme, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditProfile, setIsEditProfile] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: ''
  });
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email
  });
  const [form, setForm] = useState('');

  function editProfile() {
    setIsValid(false);
    setIsEditProfile(false);
  }

  useEffect(() => {
    if (!errorUpdateUser) {
      setIsEditProfile(true);
    }
  }, [currentUser])

  function checkFieldsDiversity() {
    const arr = {
      name: currentUser.name,
      email: currentUser.email
    }
    return JSON.stringify(arr) === JSON.stringify(formData);
  }


  function handleChange(e) {
    resetError();
    const { name, value, validationMessage } = e.target;
    setForm(e.target.form);
    setFormData({ ...formData, [name]: value });
    setErrorMessage({ ...errorMessage, [name]: validationMessage });
  }

  useEffect(() => {
    if (form && !checkFieldsDiversity()) {
      setIsValid(form.checkValidity());
    } else {
      setIsValid(false);
    }
  }, [formData, form]);

  function onSubmit(e) {
    e.preventDefault();
    handleUpdateUser({
      name: formData.name,
      email: formData.email
    });
  }

  return (
    <>
      <Header theme={theme} loggedIn={loggedIn} />
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
                    onChange={handleChange}
                    disabled={isEditProfile}
                    type="text"
                    value={formData.name}
                    id="name"
                    name="name"
                    minLength="2"
                    noValidate
                    placeholder='Имя профиля'
                    pattern='[a-zA-Zа-яА-Я-\s]*'
                    required
                  />
                </label>
              </li>

              <li className="profile__list-element">
                <label className="profile__label-container">
                  <h3 className='profile__element'>E-mail</h3>
                  <input className='profile__element profile__input'
                    onChange={handleChange}
                    disabled={isEditProfile}
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder='E-mail'
                    noValidate
                    pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                    required
                  />
                </label>
              </li>
            </ul>
            <div className='profile__button-container'>
              <span className="profile__message profile__message_ok">{messageOk}</span>
              <span className="profile__message profile__message_error">{errorMessage.name || errorMessage.email || errorUpdateUser}</span>
              {isEditProfile ? (<span
                className='profile__button animation__link'
                onClick={editProfile}
              >Редактировать</span>)
                :
                (
                  <button
                    className={`profile__save-button ${isValid && !errorUpdateUser ? 'profile__save-button_activ animation__button' : ''}`}
                    type="submit"
                    disabled={!isValid || errorUpdateUser}
                    aria-label="Сохранить"
                  >Сохранить</button>
                )}</div>


          </form>

          {isEditProfile ? (<span
            className='profile__button profile__logout-button animation__link'
            onClick={signOut}
          >Выйти из аккаунта</span>
          ) : ('')}
        </div>

      </article >
    </>

  );
}

export default Profile;