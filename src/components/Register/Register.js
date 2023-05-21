import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../SignForm/SignForm.css';
import '../Animation/Animation.css';

function Register({ onCreateUser, errorCreateUser, resetError }) {
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    resetError();
    const { name, value, validationMessage, form } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage({ ...errorMessage, [name]: validationMessage });
    setIsValid(form.checkValidity());
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onCreateUser(formData);
  }

  return (
    <div className="sign-form">
      <div className="sign-form__container">
        <Link className='sign-form__link animation__button' to='/'>
          <img className='sign-form__logo' alt="Логотип сайта. Черный круг." src={logo} />
        </Link>
        <h1 className="sign-form__title">Добро пожаловать!</h1>

        <form className='sign-form__form' onSubmit={handleFormSubmit} noValidate>
          <ul className='sign-form__label-container'>
            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>Имя</h3>
                <input
                  className='sign-form__input'
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  minLength="2"
                  maxLength='30'
                  pattern='[a-zA-Zа-яА-Я-\s]*'
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">{errorMessage.name}</span>
              </label>
            </li>

            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>E-mail</h3>
                <input
                  className='sign-form__input'
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">{errorMessage.email}</span>
              </label>
            </li>

            <li>
              <label className="sign-form__label">
                <h3 className='sign-form__name'>Пароль</h3>
                <input
                  className='sign-form__input'
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">{errorMessage.password}</span>
              </label>
            </li>
          </ul>

          <div className='sign-form__button-container'>
            <span className="sign-form__error-message_form">{errorCreateUser}</span>
            <button
              className={`sign-form__button ${!isValid || errorCreateUser ? 'sign-form__button_disabled' : 'animation__button'}`}
              type="submit"
              aria-label="Кнопка сохранить"
              disabled={!isValid || errorCreateUser}
            >Зарегистрироваться</button>
          </div>
          <h2 className='sign-form__span'>Уже зарегистрированы?
            <Link className='sign-form__link animation__link' to='/signin'> Войти</Link>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default Register;