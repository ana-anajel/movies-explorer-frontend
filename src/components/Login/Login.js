import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../SignForm/SignForm.css';
import '../Animation/Animation.css';

function Login({ onLogin, errorAuthorization, resetError }) {
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: ''
  });

  const [formData, setFormData] = useState({
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
    onLogin({
      email: formData.email,
      password: formData.password
    });
  }

  return (
    <article className="sign-form">
      <div className="sign-form__container">
        <Link className='sign-form__link animation__button' to='/'><img className='sign-form__logo' alt="Логотип сайта. Черный круг." src={logo} /></Link>
        <h1 className="sign-form__title">Рады видеть!</h1>

        <form className='sign-form__form' onSubmit={handleFormSubmit} noValidate >
          <ul className='sign-form__label-container'>
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
                  noValidate
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
                  className='sign-form__input sign-form__input-error'
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  noValidate
                  required
                />
                <span className="sign-form__error-message popup__input-error-name">{errorMessage.password}</span>
              </label>
            </li>
          </ul>

          <div className='sign-form__button-container'>
            <span className="sign-form__error-message_form">{errorAuthorization}</span>
            <button
              className={`sign-form__button ${!isValid || errorAuthorization ? 'sign-form__button_disabled' : 'animation__button'}`}
              type="submit"
              aria-label="Кнопка сохранить"
              disabled={!isValid || errorAuthorization}
            >Войти</button>
          </div>
          <h2 className='sign-form__span'>Ещё не зарегистрированы?
            <Link className='sign-form__link animation__link' to='/signup'> Регистрация</Link></h2>
        </form>
      </div>
    </article>
  );
}

export default Login;